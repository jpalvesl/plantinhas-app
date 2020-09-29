import React, { useState, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, CheckButton, InputView, ButtonText } from './styles';
import { MainContext } from '../../contexts/MainContext';

import Header from '../../components/Header';
import Input from '../../components/Input';

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
      addFolder({
        city,
        state,
        parts: []
      })
      
      navigation.goBack()
    }
  }

  return (
    <>
      <Header 
        title='Novo local'
        hasGoBack
      />
      <Container>
        <InputView>
          <Input
            label="Cidade"
            placeholder="Ex: Campina Grande"
            value={city}
            onChangeText={text => setCity(text)}
          />
          <Input 
            label="Estado"
            placeholder="Ex: PB"
            value={state}
            onChangeText={text => setState(text)}
            autoCapitalize='characters'
          />
        </InputView>

        <CheckButton onPress={handleAddFolder}>
          <ButtonText>Cadastrar novo local de coleta</ButtonText>
        </CheckButton>
      </Container>
    </>
  );
}

export default CreateFolderScreen;