import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, Content, Input, DiameterInput, FitaButton, FitaLabel, SubmitButton, TextContent } from './styles';

import parseStringAsArray from '../../utils/parseStringAsArray';

function EditItemScreen() {
  const [fita, setFita] = useState(false)
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
  }, [])

  function FitaToggle() {
    setFita((state) => !state)
  }

  function getIndex(arrayPlants) {
    var counter = 0
    for (let plantComparator of arrayPlants) {
      console.log(plantComparator)
      if (plant.name == plantComparator.name) return counter
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
        plantEdited.fita = fita
        plantEdited.height = height

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
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input 
          value={height}
          onChangeText={(text) => setHeight(text)}
        />

        <DiameterInput>
          <FitaButton onPress={FitaToggle}>
            <Ionicons name="ios-checkmark" size={24} color={fita? '#000': '#fff'}/>
            <FitaLabel>Fita</FitaLabel>
          </FitaButton>
          <Input 
          value={diameters}
          onChangeText={(text) => setDiameters(text)}
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