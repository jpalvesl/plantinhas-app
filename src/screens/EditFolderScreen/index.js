import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, TextInput, CheckButton } from './styles';

function EditFolder() {
  return (
    <Container>
      <TextInput
        placeholder='Cidade'
      />

      <TextInput
        placeholder='Estado'
      />

      <CheckButton>
        <Ionicons name='ios-checkmark' size={50} color='#000' />
      </CheckButton>
    </Container>
  )
}

export default EditFolder;