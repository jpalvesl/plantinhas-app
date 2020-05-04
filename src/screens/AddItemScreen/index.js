import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Input, DiameterInput, FitaButton, FitaLabel, SubmitArea, SubmitButtonLocal, SubmitButtonOnline, TextContent } from './styles';

function EditItemScreen() {
  const [fita, setFita] = useState(false)
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [diameters, setDiameters] = useState('');

  const navigation = useNavigation();

  function FitaToggle() {
    setFita((state) => !state)
  }

  function handleAddOnline() {
    navigation.navigate('FolderInside')
  }

  return (
    <Container>
      <Content>
        <Input 
          placeholder="Nome popular"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input 
          placeholder="Altura"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />

        <DiameterInput>
          <FitaButton onPress={FitaToggle}>
            <Ionicons name="ios-checkmark" size={24} color={fita? '#000': '#fff'}/>
            <FitaLabel>Fita</FitaLabel>
          </FitaButton>
          <Input 
          placeholder="Diâmetros"
          value={diameters}
          onChangeText={(text) => setDiameters(text)}
          />
        </DiameterInput>
        <SubmitArea>
          <SubmitButtonLocal onPress={handleAddOnline}>
            <TextContent>Finalizar edição</TextContent>
            <Ionicons name="ios-leaf" size={14} />
          </SubmitButtonLocal>

          <SubmitButtonOnline onPress={handleAddOnline}>
            <TextContent>Finalizar edição</TextContent>
            <Ionicons name="ios-leaf" size={14} />
          </SubmitButtonOnline>
        </SubmitArea>
      </Content>
    </Container>
  );
}

export default EditItemScreen;