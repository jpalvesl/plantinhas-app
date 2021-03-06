import React, { useState, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Wrapper, OkButton, ButtonText } from './styles';
import { MainContext } from '../../contexts/MainContext';

import Header from '../../components/Header';
import Input from '../../components/Input';

function AddPart() {
  const { addPart } = useContext(MainContext);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [NDVI, setNDVI] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  const folderIndex = route.params.folderIndex

  function handleAddPart() {
    const part = {
      name,
      location,
      NDVI: Number(NDVI)
    }
    
    addPart(folderIndex, part)
    navigation.goBack()
  }

  return (
    <>
      <Header
        hasGoBack
        title='Nova parcela'
      />
      <Container>
        <Wrapper>
          <Input 
            label='Rótulo'
            placeholder='Ex: Parcela dos carrapatos'
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Input 
            label='Localização'
            placeholder='Ex: latitude, longitude'
            value={location}
            onChangeText={(text) => setLocation(text)}
          />

          <Input 
            label='NDVI'
            placeholder='Ex: 2.3'
            value={NDVI}
            onChangeText={(text) => setNDVI(text)}
          />
            
          <OkButton onPress={handleAddPart}>
            <ButtonText>Cadastrar nova parcela</ButtonText>
          </OkButton>
        </Wrapper>
      </Container>
    </>
  )
}

export default AddPart;