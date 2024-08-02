import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LogBox } from 'react-native';

import { Container, Content, SubmitButton, TextContent } from './styles';
import { MainContext } from '../../contexts/MainContext';

import Header from '../../components/Header';
import Input from '../../components/Input';
import DiameterInput from '../../components/DiameterInput';

import parseStringAsArray from '../../utils/parseStringAsArray';
  
LogBox.ignoreLogs([
  'Warning: Non-serializable values were found in the navigation state',
]);

function EditItemScreen() {
  const { plants, attPlants } = useContext(MainContext);

  const [string, setString] = useState(false)
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [diameters, setDiameters] = useState('')

  const navigation = useNavigation();
  const route = useRoute();

  const plant = route.params.plant

  useEffect(() => {
    setName(plant.name)
    setHeight(String(plant.height))
    setDiameters(plant.diameter.join(', '))
    setString(plant.string)
  }, [])

  function fitaToggle() {
    setString((state) => !state)
  }

  function getIndex(arrayPlants) {
    var counter = 0
    for (let plantComparator of arrayPlants) {
      if (plant.date == plantComparator.date) return counter
      counter++
    }
    return -1
  }

  async function changeInformations() {
    try {
      const formatedDiamter = parseStringAsArray(diameters)

      if (!name){
        alert('Nome inválido')
        return 
      }
      else if (!Number(height)) {
        alert('Altura inválida')
        return
      }
      else if (!formatedDiamter || !diameters) {
        alert('Diâmetro(s) inválidos')
        return 
      }

      const indexPlant = getIndex(plants)
      const plantEdited = plants[indexPlant]
      
      plantEdited.name = name
      plantEdited.diameter = formatedDiamter
      plantEdited.string = string
      
      plantEdited.height = Number(height)
      
      attPlants(plants)
    } catch (error) {
      console.error(error)
    }
    
    navigation.goBack()
  }

  return (
    <>
      <Header 
        hasGoBack
        title='Editar planta'
      />
      <Container>
        <Content>
          <Input 
            label="Nome popular"
            placeholder="Ex: Pata de vaca"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input 
            label="Altura(m)"
            placeholder="Ex: 2"
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
          />

          <DiameterInput
            fitaToggle={fitaToggle}
            string={string}
            placeholder='Ex: 1.5, 2.1, 1'
            value={diameters}
            onChangeText={(text) => setDiameters(text)}
            keyboardType="numeric"
          />
        
          <SubmitButton onPress={changeInformations}>
            <TextContent>Finalizar edição</TextContent>
            <Ionicons name="leaf" size={20} />
          </SubmitButton>
        </Content>
      </Container>
    </>
  );
}

export default EditItemScreen;