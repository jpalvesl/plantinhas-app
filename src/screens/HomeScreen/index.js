import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, Bold, List, ItemContent, City, State, ActionButtons, AddButton, Action, TrashButton } from './styles';
import { MainContext } from '../../contexts/MainContext';

function HomeScreen() {
  const { folders } = useContext(MainContext);

  const navigation = useNavigation();

  function NavigateToCreateFolder() {
    navigation.navigate('CreateFolder')
  }

  function NavigateToEditFolder() {
    navigation.navigate('EditFolder')
  }

  function NavigateToFolderInside(folder) {
    navigation.navigate('FolderInside', { folder })
  }

  return (
    <Container>
      <Counter>Existem <Bold>{folders.length}</Bold> pasta(s)</Counter>
      <List 
        data={folders}
        keyExtractor={(value) => String(value.city+value.state)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: folder }) => (
          <ItemContent>
            <City>{folder.city}</City>
            <State>{folder.state}</State>
            <ActionButtons>
              <Action onPress={NavigateToEditFolder}>
                <Ionicons name='ios-create' size={30} color='#000' />
              </Action>
              <Action onPress={() => NavigateToFolderInside(folder)}>
                <Ionicons name='ios-open' size={30} color='#000' />
              </Action>
            </ActionButtons>

            <TrashButton onPress={() => alert('Tem q excluir o item')}>
              <Ionicons name='ios-trash' size={20} color='#000' />
            </TrashButton>
          </ItemContent>
          )
        }
      />
      <AddButton onPress={NavigateToCreateFolder}>
        <Ionicons name="ios-add" size={30} />
      </AddButton>
    </Container>
  );
}

export default HomeScreen;