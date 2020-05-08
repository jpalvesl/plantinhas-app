import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, Counter, List, ItemList, ItemContent, AddItemButton, PlantName, MeanDiameter, Fita, Bold, Height } from './styles';

function FolderInsideScreen() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function LoadPlants() {
      try {
        await AsyncStorage.setItem('plants', JSON.stringify([
          {
          "diameter": [
            4.2,
            2,
            5.1
          ],
          "_id": "5eb2638ba230d64d2bcabf2d",
          "name": "Planta6",
          "city": "Campina Grande",
          "uf": "PB",
          "string": true,
          "height": 1.25,
          "latitude": 0,
          "longitude": 3,
          "date": "2020-05-06T07:13:14.931Z",
          "__v": 0
        }
      ]))
      const data = await AsyncStorage.getItem('plants')
      if (data !== null) {
        setPlants(JSON.parse(data))
      }
      } catch (error) {
        alert('Não foi possivel carregar as plantas')
      }
    }

    LoadPlants()
  }, [])

  const navigation = useNavigation();

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
        keyExtractor={({ _id }) => _id}
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