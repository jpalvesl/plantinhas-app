import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Input, DiameterInput, FitaButton, FitaLabel, SubmitButton, TextContent } from './styles';

function EditItemScreen() {
  const [fita, setFita] = useState(false)

  const navigation = useNavigation();

  function FitaToggle() {
    setFita((state) => !state)
  }

  function changeInformations() {
    navigation.navigate('FolderInside')
  }

  return (
    <Container>
      <Content>
        <Input 
          value={'Nome da planta'}
          onChangeText={() => {}}
        />
        <Input 
          value={'Altura'}
          onChangeText={() => {}}
        />

        <DiameterInput>
          <FitaButton onPress={FitaToggle}>
            <Ionicons name="ios-checkmark" size={24} color={fita? '#000': '#fff'}/>
            <FitaLabel>Fita</FitaLabel>
          </FitaButton>
          <Input 
          value={'Diam1, Diam2...'}
          onChangeText={() => {}}
          />
        </DiameterInput>
        <SubmitButton onPress={changeInformations}>
          <TextContent>Finalizar edição</TextContent>
          <Ionicons name="ios-leaf" size={20} />
        </SubmitButton>
      </Content>
    </Container>
  );
}

export default EditItemScreen;