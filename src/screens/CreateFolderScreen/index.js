import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage, Alert } from 'react-native';

import { Container, CheckButton, Input, InputView } from './styles';

function CreateFolderScreen() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  const navigation = useNavigation();
  const route = useRoute();

  const folders = route.params.folders
  
  function folderVerification(folders, fold) {
    const result = folders.filter((element) => (fold.state === element.state && fold.city === element.city))
     // caso nao exista nenhuma pasta igual o valor vai ser true 
    return !result.length
  }

  async function addFolder() {
    if (folderVerification(folders, { city: city.trim() , state: state.trim()})) {
      try {
        folders.push({city, state})
        await AsyncStorage.setItem(
          'folders',
          JSON.stringify(folders)
        )
      } catch (error) {
        Alert.alert('Erro ao criar pasta', 'Tente novamente')
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
    else {
      Alert.alert('Pasta existente', 'Altere ao menos um dos campos, para poder cadastrar uma nova pasta')
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

      <CheckButton onPress={addFolder}>
        <Ionicons name="ios-checkmark" size={30} />
      </CheckButton>
    </Container>
  );
}

export default CreateFolderScreen;