import React, { useState, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage, Alert } from 'react-native';

import { Container, CheckButton, Input, InputView } from './styles';
import { MainContext } from '../../contexts/MainContext';

function CreateFolderScreen() {
  const { folders, addFolder } = useContext(MainContext)

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const navigation = useNavigation();

  
  function folderVerification(folders, fold) {
    const result = folders.filter((element) => (fold.state === element.state && fold.city === element.city))
     // caso nao exista nenhuma pasta igual o valor vai ser true 
    return !result.length
  }

  async function handleAddFolder() {
    if (folderVerification(folders, { city: city.trim() , state: state.trim()})) {
      addFolder({city, state})

      navigation.goBack()
    }
  }

  return (
    <Container>
      <InputView>
        <Input 
        placeholder="Cidade"
        value={city}
        onChangeText={text => setCity(text)}
      />
      <Input 
        placeholder="Estado"
        value={state}
        onChangeText={text => setState(text)}
        autoCapitalize='characters'
      />
      </InputView>

      <CheckButton onPress={handleAddFolder}>
        <Ionicons name="ios-checkmark" size={30} />
      </CheckButton>
    </Container>
  );
}

export default CreateFolderScreen;