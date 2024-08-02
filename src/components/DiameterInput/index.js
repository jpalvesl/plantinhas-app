import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, TextInput, InputBlock, FitaButton, FitaLabel, Input } from './styles';

function DiameterInput({ fitaToggle, string, ...props }) {
  return (
    <Container>
      <TextInput>Diâmetros(cm)</TextInput>

      <InputBlock>
        <FitaButton
          onPress={fitaToggle}
        >
          <Ionicons name="checkmark" size={24} color={string? '#000': '#fff'}/>
            <FitaLabel>Fita</FitaLabel>
        </FitaButton>

        <Input {...props} />
      </InputBlock>
    </Container>
  )
}

export default DiameterInput;