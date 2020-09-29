import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { List, ItemContainer, ItemText, ActionButtons, Button, TrashButton } from './styles';

function FoldersList({ folders }) {
  const navigation = useNavigation()

  function NavigateToEditFolder(folderIndex, folder) {
    navigation.navigate('EditFolder', { folderIndex, folder })
  }

  function NavigateToFolderInside(folderIndex) {
    navigation.navigate('FolderInside', { folderIndex })
  }

  return (
     <List 
      data={folders}
      keyExtractor={({ city, state }) => `${city}_${state}`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: folder, index }) => (
        <ItemContainer>
          <ItemText>{folder.city}</ItemText>
          <ItemText>{folder.state}</ItemText>
          <ActionButtons>
            <Button onPress={() => NavigateToEditFolder(index, folder)}>
              <Ionicons name='md-create' size={30} color='#000' />
            </Button>

            <Button onPress={() => NavigateToFolderInside(index)}>
              <Ionicons name='md-open' size={30} color='#000' />
            </Button>
          </ActionButtons>

          <TrashButton onPress={() => alert('Tem q excluir o item')}>
            <Ionicons name='md-trash' size={20} color='#000' />
          </TrashButton>
        </ItemContainer>
        )
      }
    />
  )
}

export default FoldersList;