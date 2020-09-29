import React, { useEffect, useState, useContext } from 'react';
import { Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Counter, List, ItemList, ItemContent, PlantName, MeanDiameter, Fita, Bold, Height } from './styles';
import { MainContext } from '../../contexts/MainContext';

import api from '../../services/api';

import getMeanOfArray from '../../utils/getMeanOfArray';

function FolderInsideScreen() {
  const [selectedValue, setSelectedValue] = useState('')
  const [parts, setParts] = useState(['a', 'b', 'c'])

  const { syncPlants, attSyncPlants } = useContext(MainContext);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/all')
        attSyncPlants(response.data)
      } catch (error) {
        alert('Erro ao acessar servidor')
      }
    })()      
  }, [])


  function NavigateToItemInfo(plant){
    navigation.navigate('ItemInfo', { plant })
  }
  
  return (
    <Container>

      <Picker
        style={{ height: 50, width: '100%', backgroundColor: '#fff' }}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {parts.map(item => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>
      <Counter>Existem um total de <Bold>{syncPlants.length}</Bold> planta(s) cadastrada(s) no total</Counter>

      <List 
        data={syncPlants}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: plant }) => (
          <ItemList onPress={() => NavigateToItemInfo(plant)}>
            <ItemContent>
              <PlantName>{plant.name}</PlantName>
              <MeanDiameter>
                <Bold>Diâmetro(s)</Bold>: {getMeanOfArray(plant.diameter)}cm {plant.string ? '*': ''}
              </MeanDiameter>
              <Height><Bold>Altura</Bold>: {plant.height}m</Height>
              <Fita><Bold>Fita</Bold>: {plant.string? 'sim' : 'não'}</Fita>
            </ItemContent>
          </ItemList>
          )
        }
      />

    </Container>
  );
}

export default FolderInsideScreen;