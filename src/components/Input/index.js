import React from 'react';

import { InputBlock, Label, TextInput } from './styles';

function Input({ label, ...props }) {
  return (
    <InputBlock>
      <Label>{label}</Label>
      <TextInput 
        placeholder='Ex: Campina Grande'
        {...props}
      />
    </InputBlock>
  )
}

export default Input;