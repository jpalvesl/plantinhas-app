import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, Content, Input, DiameterInput, FitaButton, FitaLabel, SubmitButton, TextContent } from './styles';

import parseStringAsArray from '../../utils/parseStringAsArray';

function EditItemScreen() {
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
      console.log(plantComparator)
      if (plant.date == plantComparator.date) return counter
      counter++
    }
    return -1
  }

  async function changeInformations() {
    try {
      const data = await AsyncStorage.getItem('plants')
      if (data !== null) {
        const arrayPlants = JSON.parse(data)
        const indexPlant = getIndex(arrayPlants)
        
        const plantEdited = arrayPlants[indexPlant]
        
        plantEdited.name = name
        plantEdited.diameter = parseStringAsArray(diameters)
        plantEdited.string = string
        
        if (!name){
          alert('Nome inválido')
          return 
        }
        else if (!Number(height)) {
          alert('Altura inválida')
          return
        }
        else if (!plantEdited.diameter || !diameters) {
          alert('Diâmetros inválidos')
          return 
        }

        plantEdited.height = Number(height)
      
        await AsyncStorage.setItem('plants', JSON.stringify(arrayPlants))
      }
    } catch (error) {
      alert('Erro ao mudar informações')
    }


    
    navigation.reset({
      index: 1,
      routes: [{ name: 'Home' }, { name: 'FolderInside', params: { folder: { city: plant.city, state: plant.uf } } }]
    })
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