import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, CheckButton, Input, InputView } from './styles';

function CreateFolderScreen() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [folders, setFolders] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function LoadFolders() {
      try {
        const data = await AsyncStorage.getItem('folders')
        if (data !== null) {
          setFolders(JSON.parse(data))
        }         
      } catch (error) {
        alert('Erro ao carregar pastas, tente novamente')
      }
    }

    LoadFolders()
  }, [])

  function folderVerification(folders, fold) {
    const result = folders.filter((element) => (fold.state === element.state && fold.city === element.city))
     // caso nao exista nenhuma pasta igual o valor vai ser true 
    return !result.length
  }

  async function addFolder() {
    if (folderVerification(folders, {city, state})) {
      try {
        await AsyncStorage.setItem(
          'folders',
          JSON.stringify([...folders, {city, state}])
        )
      } catch (error) {
        console.log('error')
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
    else {
      alert('Já existe uma pasta com esses nomes')
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
      />
      </InputView>

      <CheckButton onPress={addFolder}>
        <Ionicons name="ios-checkmark" size={30} />
      </CheckButton>
    </Container>
  );
}

export default CreateFolderScreen;