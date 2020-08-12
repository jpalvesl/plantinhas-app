import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { List, ItemList, PlantName, ItemText, Bold, TrashButton, EditButton } from './styles';

import getMeanOfArray from '../../utils/getMeanOfArray';

function PlantsList({ filteredPlants }) {
  const navigation = useNavigation();

  function NavigateToEditItem(plant){
    navigation.navigate('EditItem', { plant })
  }

  return (
    <List 
      data={filteredPlants}
      keyExtractor={({ name }, index) => `${name}_${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: plant }) => (
        <ItemList>
          <PlantName>{plant.name}</PlantName>
          <ItemText>
              <Bold>Diâmetro Médio</Bold>: {getMeanOfArray(plant.diameter)}cm {plant.string ? '*' : ''}
          </ItemText>
          <ItemText><Bold>Altura</Bold>: {3}m</ItemText>
          <ItemText><Bold>Fita</Bold>: {plant.string? 'sim' : 'não'}</ItemText>
        
          <TrashButton onPress={() => alert('deve apagar')}>
            <Ionicons name='md-trash' size={20} color='#000' />
          </TrashButton>

          <EditButton onPress={() => NavigateToEditItem(plant)}>
            <Ionicons name='md-create' size={30} color='#000' />
          </EditButton>
        </ItemList>
        )
      }
    />
  )
}

export default PlantsList;