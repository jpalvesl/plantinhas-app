import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, Bold, List, ItemList, ItemContent, City, State, AddButton } from './styles';
import { MainContext } from '../../contexts/MainContext';

function HomeScreen() {
  const { folders } = useContext(MainContext);

  const navigation = useNavigation();

  function NavigateToCreateFolder() {
    navigation.navigate('CreateFolder')
  }

  return (
    <Container>
      <Counter>Existem <Bold>{folders.length}</Bold> pasta(s)</Counter>
      <List 
        data={folders}
        keyExtractor={(value) => String(value.city+value.state)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: folder }) => (
          <ItemList onPress={() => navigation.navigate('FolderInside', { folder })}>
            <ItemContent>
              <City>{folder.city}</City>
              <State>{folder.state}</State>
            </ItemContent>
          </ItemList>
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