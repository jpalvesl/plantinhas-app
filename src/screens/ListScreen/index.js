import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, List, ItemList, ItemContent, PlantName, MeanDiameter, Fita, Bold, Height } from './styles';

import api from '../../services/api';

import getMeanOfArray from '../../utils/getMeanOfArray';

function FolderInsideScreen() {
  const [plants, setPlants] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function init() {
      try {
        const response = await api.get('/all')
        setPlants(response.data)
        
        await AsyncStorage.setItem('syncPlants', JSON.stringify(response.data))
        return
      } catch (error) {
        alert('Erro ao acessar servidor')
      }

      try {
        const data = await AsyncStorage.getItem('syncPlants')

        if (data !== null) {
          setPlants(JSON.parse(data))
        }

      } catch (error) {
        alert('Erro ao acessar plantas presenter no celular')
      }
    }        

    init()
  }, [])


  function NavigateToItemInfo(plant){
    navigation.navigate('ItemInfo', { plant })
  }
  
  return (
    <Container>
      <List 
        data={plants}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: plant }) => (
          <ItemList onPress={() => NavigateToItemInfo(plant)}>
            <ItemContent>
              <PlantName>{plant.name}</PlantName>
              <MeanDiameter>
                <Bold>Diâmetro(s)</Bold>: {getMeanOfArray(plant.diameter)}m
              </MeanDiameter>
              <Height><Bold>Altura</Bold>: {plant.height}m</Height>
              <Fita><Bold>Fita</Bold>: {plant.string? <Ionicons name="ios-checkmark" size={16} />: ''}</Fita>
            </ItemContent>
          </ItemList>
          )
        }
      />

    </Container>
  );
}

export default FolderInsideScreen;