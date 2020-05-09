import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, Counter, List, ItemList, ItemContent, AddItemButton, PlantName, MeanDiameter, Fita, Bold, Height } from './styles';

function FolderInsideScreen() {
  const [plants, setPlants] = useState([]);
  
  const navigation = useNavigation();
  const route = useRoute();

  const { city, state } = route.params.folder;

  useEffect(() => {
    function plantFilter(arrayPlants) {
      return arrayPlants.filter((plant) => (plant.city === city && plant.uf === state))
    }

    async function LoadPlants() {
      try {
        await AsyncStorage.setItem('plants', JSON.stringify(
          [
  {
    "diameter": [
      4.2,
      2,
      5.1
    ],
    "_id": "5eb5277950b86007831855b4",
    "name": "Planta 1",
    "city": "Campina Grande",
    "uf": "PB",
    "string": false,
    "height": 1.25,
    "latitude": 0,
    "longitude": 3,
    "date": "2020-05-08T09:33:45.504Z",
    "__v": 0
  },
  {
    "diameter": [
      4.2,
      2,
      5.1
    ],
    "_id": "5eb5278250b86007831855b5",
    "name": "Planta 2",
    "city": "Campina Grande",
    "uf": "PB",
    "string": false,
    "height": 1.25,
    "latitude": 0,
    "longitude": 3,
    "date": "2020-05-08T09:33:54.378Z",
    "__v": 0
  },
  {
    "diameter": [
      4.2,
      2,
      5.1
    ],
    "_id": "5eb5279050b86007831855b6",
    "name": "Planta 3",
    "city": "João Pessoa",
    "uf": "PB",
    "string": false,
    "height": 1.25,
    "latitude": 0,
    "longitude": 3,
    "date": "2020-05-08T09:34:08.531Z",
    "__v": 0
  },
  {
    "diameter": [
      4.2,
      2,
      5.1
    ],
    "_id": "5eb5279450b86007831855b7",
    "name": "Planta 4",
    "city": "João Pessoa",
    "uf": "PB",
    "string": false,
    "height": 1.25,
    "latitude": 0,
    "longitude": 3,
    "date": "2020-05-08T09:34:12.033Z",
    "__v": 0
  },
  {
    "diameter": [
      4.2,
      2,
      5.1
    ],
    "_id": "5eb527a550b86007831855b8",
    "name": "Planta 5",
    "city": "Recife",
    "uf": "PE",
    "string": false,
    "height": 1.25,
    "latitude": 0,
    "longitude": 3,
    "date": "2020-05-08T09:34:29.193Z",
    "__v": 0
  },
  {
    "diameter": [
      4.2,
      2,
      5.1
    ],
    "_id": "5eb527ab50b86007831855b9",
    "name": "Planta 6",
    "city": "Recife",
    "uf": "PE",
    "string": false,
    "height": 1.25,
    "latitude": 0,
    "longitude": 3,
    "date": "2020-05-08T09:34:34.849Z",
    "__v": 0
  }
]
        ))

        const data = await AsyncStorage.getItem('plants')
        //console.log(data)
        if (data !== null) {
          const ObjectData = JSON.parse(data)
          
          const FilteredData = plantFilter(ObjectData)
          //console.log(FilteredData)
          setPlants(FilteredData)
        }
        else {
          //await AsyncStorage.setItem('plants', '[]')
        }
      } catch (error) {
        alert('Não foi possivel carregar as plantas')
      }
    }

    LoadPlants()
  }, [])


  function NavigateToEditItem(){
    navigation.navigate('EditItem')
  }

  function NavigateToAddItem(){
    navigation.navigate('AddItem')
  }
  
  return (
    <Container>
      <Counter>Essa pasta contém <Bold>{plants.length} planta(s)</Bold></Counter>

      <List 
        data={plants}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: plant }) => (
          <ItemList onPress={NavigateToEditItem}>
            <ItemContent>
              <PlantName>{plant.name}</PlantName>
              <MeanDiameter><Bold>Diâmetro(s)</Bold>: {plant.diameter[0]}m</MeanDiameter>
              <Height><Bold>Altura</Bold>: {plant.height}m</Height>
              <Fita><Bold>Fita</Bold>: {plant.string? <Ionicons name="ios-checkmark" size={16} />: ''}</Fita>
            </ItemContent>
          </ItemList>
          )
        }
      />

      <AddItemButton onPress={NavigateToAddItem}>
        <Ionicons name="ios-leaf" size={30} />
      </AddItemButton>
    </Container>
  );
}

export default FolderInsideScreen;