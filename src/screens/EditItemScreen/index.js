import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { YellowBox } from 'react-native';

import { Container, Content, Input, DiameterInput, FitaButton, FitaLabel, SubmitButton, TextContent } from './styles';
import { MainContext } from '../../contexts/MainContext';

import parseStringAsArray from '../../utils/parseStringAsArray';
  
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
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

  function FitaToggle() {
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
    <Container>
      <Content>
        <Input 
          placeholder="Nome popular"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input 
          placeholder="Altura(m)"
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
        />

        <DiameterInput>
          <FitaButton onPress={FitaToggle}>
            <Ionicons name="ios-checkmark" size={24} color={string? '#000': '#fff'}/>
            <FitaLabel>Fita</FitaLabel>
          </FitaButton>
          <Input 
          value={diameters}
          onChangeText={(text) => setDiameters(text)}
          keyboardType="numeric"
          />
        </DiameterInput>
        <SubmitButton onPress={changeInformations}>
          <TextContent>Finalizar edição</TextContent>
          <Ionicons name="ios-leaf" size={20} />
        </SubmitButton>
      </Content>
    </Container>
  );
}

export default EditItemScreen;