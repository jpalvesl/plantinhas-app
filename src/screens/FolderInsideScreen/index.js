import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, Bold, AddButton } from './styles';
import { MainContext } from '../../contexts/MainContext';

import Header from '../../components/Header'
import PartsList from '../../components/PartsList'

function FolderInsideScreen() {
  const { folders } = useContext(MainContext);

  const navigation = useNavigation();
  const route = useRoute();

  const folderIndex = route.params.folderIndex

  function NavigateToAddPart() {
    navigation.navigate('AddPart', { folderIndex })
  }

  return (
    <>
      <Header 
        hasGoBack
        title='Parcelas'
        rightButton={(
          <AddButton onPress={NavigateToAddPart}>
            <Ionicons name="ios-add" size={30} color="#000" />
          </AddButton>
        )}
      />
      <Container>
        <Counter>Essa pasta contém <Bold>{folders[folderIndex].parts.length} parcelas</Bold></Counter>
        
        <PartsList 
          folders={folders}
          folderIndex={folderIndex}
        />
      </Container>
    </>
  )
}

export default FolderInsideScreen;