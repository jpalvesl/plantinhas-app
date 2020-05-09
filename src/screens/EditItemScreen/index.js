import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Input, DiameterInput, FitaButton, FitaLabel, SubmitButton, TextContent } from './styles';

function EditItemScreen() {
  const [fita, setFita] = useState(false)
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [diameters, setDiameters] = useState('')

  const navigation = useNavigation();
  const route = useRoute();

  const plant = route.params.plant

  useEffect(() => {
    setName(plant.name)
    setHeight(String(plant.height))
    setDiameters(String(plant.diameter))
  }, [])

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
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input 
          value={height}
          onChangeText={(text) => setHeight(text)}
        />

        <DiameterInput>
          <FitaButton onPress={FitaToggle}>
            <Ionicons name="ios-checkmark" size={24} color={fita? '#000': '#fff'}/>
            <FitaLabel>Fita</FitaLabel>
          </FitaButton>
          <Input 
          value={diameters}
          onChangeText={(text) => setDiameters(text)}
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