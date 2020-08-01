import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Wrapper, TextInput, OkButton } from './styles';

function AddPart() {
  return (
    <Container>
      <Wrapper>
        <TextInput 
          placeholder='Rótulo'
        />

        <TextInput 
          placeholder='Periodo'
        />

        <TextInput 
          placeholder='Localização'
        />

        <TextInput 
          placeholder='NDVI'
        />

      </Wrapper>
      <OkButton>
        <Ionicons name='ios-checkmark' size={40} color='#000' />
      </OkButton>
    </Container>
  )
}

export default AddPart;