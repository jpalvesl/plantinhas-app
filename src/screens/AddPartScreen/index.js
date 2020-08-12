import React, { useState, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Wrapper, TextInput, OkButton } from './styles';
import { MainContext } from '../../contexts/MainContext';


function AddPart() {
  const { addPart } = useContext(MainContext);

  const [name, setName] = useState('');
  const [period, setPeriod] = useState('');
  const [location, setLocation] = useState('');
  const [NDVI, setNDVI] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  const folderIndex = route.params.folderIndex

  function handleAddPart() {
    const part = {
      name,
      period,
      location,
      NDVI: Number(NDVI)
    }
    
    addPart(folderIndex, part)
    navigation.goBack()
  }

  return (
    <Container>
      <Wrapper>
        <TextInput 
          placeholder='Rótulo'
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput 
          placeholder='Periodo'
          value={period}
          onChangeText={(text) => setPeriod(text)}
        />

        <TextInput 
          placeholder='Localização'
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        <TextInput 
          placeholder='NDVI'
          value={NDVI}
          onChangeText={(text) => setNDVI(text)}
        />

      </Wrapper>
      <OkButton onPress={handleAddPart}>
        <Ionicons name='ios-checkmark' size={40} color='#000' />
      </OkButton>
    </Container>
  )
}

export default AddPart;