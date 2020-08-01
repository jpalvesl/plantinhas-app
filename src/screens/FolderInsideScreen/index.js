import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, List, ItemList, ItemText, Bold, ActionButtons, Action, TrashButton, AddItemButton } from './styles';
import { MainContext } from '../../contexts/MainContext';


function FolderInsideScreen() {

  const navigation = useNavigation()

  function NavigateToAddPart(part) {
    navigation.navigate('AddPart')
  }

  function NavigateToPartInside(part) {
    navigation.navigate('PartInside')
  }

  return (
    <Container>
      <Counter>Essa pasta contém <Bold>{3} parcelas</Bold></Counter>
    
      <List 
        data={[0, 1, 2]}
        keyExtractor={(item, index) => `${item}_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: part }) => (
          <ItemList>
            <ItemText>Nome da parcela</ItemText>
            <ItemText>NDVI: 1000</ItemText>

            <ActionButtons>
              <Action onPress={() => {}}>
                <Ionicons name='ios-create' size={30} color='#000' />
              </Action>
              <Action onPress={() => NavigateToPartInside()}>
                <Ionicons name='ios-open' size={30} color='#000' />
              </Action>
            </ActionButtons>

            <TrashButton onPress={() => alert('Tem q excluir o item')}>
              <Ionicons name='ios-trash' size={20} color='#000' />
            </TrashButton>
          </ItemList>
          )
        }
      />

      <AddItemButton onPress={() => NavigateToAddPart()}>
        <Ionicons name='ios-add' size={40} color='#000'/>
      </AddItemButton>
    </Container>
  )
}

export default FolderInsideScreen;