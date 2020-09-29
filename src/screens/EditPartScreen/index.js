import React, { useState, useEffect } from 'react';

import { Container, Wrapper,  OkButton, ButtonText } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';

function EditPartScreen() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [NDVI, setNDVI] = useState('');

  useEffect(() => {

  }, [])

  function handleEditPart() {

  }

  return (
    <>
      <Header
        hasGoBack
        title='Editar parcela'
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
            
          <OkButton onPress={handleEditPart}>
            <ButtonText>Editar parcela</ButtonText>
          </OkButton>
        </Wrapper>
      </Container>
    </>
  )
}

export default EditPartScreen;