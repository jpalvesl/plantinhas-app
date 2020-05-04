import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, CheckButton, Input, InputView } from './styles';

function CreateFolderScreen() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const navigation = useNavigation();

  function addFolder() {
    alert('Por hora ainda não cria a pasta')
    navigation.navigate('Home')
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