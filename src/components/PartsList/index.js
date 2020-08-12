import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { List, ItemList, ItemText, ActionButtons, Button, TrashButton } from './styles';

function PartsList({ folders, folderIndex }) {
  const navigation = useNavigation({ folders, folderIndex });

  function NavigateToPartInside(folder, part) {
    navigation.navigate('PartInside', { folder, part })
  }

  return (
    <List 
      data={folders[folderIndex].parts}
      keyExtractor={(item, index) => `${item.name}_${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: part }) => (
        <ItemList>
          <ItemText>{part.name}</ItemText>
          <ItemText>NDVI: {part.NDVI}</ItemText>

          <ActionButtons>
            <Button onPress={() => {}}>
              <Ionicons name='md-create' size={30} color='#000' />
            </Button>
            <Button onPress={() => NavigateToPartInside(folders[folderIndex], part)}>
              <Ionicons name='md-open' size={30} color='#000' />
            </Button>
          </ActionButtons>

          <TrashButton onPress={() => alert('Tem q excluir o item')}>
            <Ionicons name='md-trash' size={20} color='#000' />
          </TrashButton>
        </ItemList>
        )
      }
    />
  )
}

export default PartsList;