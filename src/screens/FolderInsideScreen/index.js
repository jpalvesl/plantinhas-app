import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, List, ItemList, ItemText, Bold, ActionButtons, Action, TrashButton, AddItemButton } from './styles';
import { MainContext } from '../../contexts/MainContext';


function FolderInsideScreen() {
  const { folders } = useContext(MainContext);

  const navigation = useNavigation();
  const route = useRoute();

  const folderIndex = route.params.folderIndex

  function NavigateToAddPart() {
    navigation.navigate('AddPart', { folderIndex })
  }

  function NavigateToPartInside(folder, part) {
    navigation.navigate('PartInside', { folder, part })
  }

  return (
    <Container>
      <Counter>Essa pasta contém <Bold>{folders[folderIndex].parts.length} parcelas</Bold></Counter>
    
      <List 
        data={folders[folderIndex].parts}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: part }) => (
          <ItemList>
            <ItemText>{part.name}</ItemText>
            <ItemText>NDVI: {part.NDVI}</ItemText>

            <ActionButtons>
              <Action onPress={() => {}}>
                <Ionicons name='ios-create' size={30} color='#000' />
              </Action>
              <Action onPress={() => NavigateToPartInside(folders[folderIndex], part)}>
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