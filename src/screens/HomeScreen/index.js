import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, Bold, AddButton } from './styles';
import { MainContext } from '../../contexts/MainContext';
import FoldersList from '../../components/FoldersList';

function HomeScreen() {
  const { folders } = useContext(MainContext);

  const navigation = useNavigation();

  function NavigateToCreateFolder() {
    navigation.navigate('CreateFolder')
  }

  return (
    <Container>
      <Counter>Existem <Bold>{folders.length}</Bold> locais registrados</Counter>
      <FoldersList 
        folders={folders}
      />

      <AddButton onPress={NavigateToCreateFolder}>
        <Ionicons name="ios-add" size={30} />
      </AddButton>
    </Container>
  );
}

export default HomeScreen;