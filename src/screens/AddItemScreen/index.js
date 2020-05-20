import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage, Alert } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import { Container, Content, Input, DiameterInput, FitaButton, FitaLabel, SubmitArea, SubmitButtonLocal, SubmitButtonOnline, TextContent } from './styles';

import parseStringAsArray from '../../utils/parseStringAsArray';

import api from '../../services/api';

function AddItemScreen() {
  const [string, setString] = useState(false)
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [diameters, setDiameters] = useState('');
  
  const navigation = useNavigation();
  const route = useRoute();

  const folder = route.params.folder

  useEffect(() => {
    async function init() {
      const { status } = await requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
      }
    }

    init()
  })

  function FitaToggle() {
    setString((state) => !state)
  }

  async function handleAddOnline() {
    const { coords } = await getCurrentPositionAsync({
      enableHighAccuracy: true,
    })

    const { latitude, longitude } = coords
    const diameter = parseStringAsArray(diameters)
    const date = new Date()
    
    if (!name.trim()){
      Alert.alert('Nome inválido', `O nome "${name}" não é valido, insira ao menos caractere para cadastrar a planta`)
      return 
    }
    else if (!Number(height)) {
      Alert.alert('Altura inválida', `A altura tem o seguinte formato, "3.1" e não "${height}"`)
      return
    }
    else if (!diameter || !diameters) {
      Alert.alert('Diâmetros inválidos', `O formato para diâmetro(s) é o seguinte "3.1, 2, 0.3", todos os espaços são ignorados`)
      return 
    }


    let plant = {
      name,
      city: folder.city,
      uf: folder.state,
      string,
      diameter,
      height: Number(height),
      latitude,
      longitude,
      date
    }

    await api.post('/plants', plant)

    navigation.navigate('FolderInside')
  }

  async function handleAddOffline() {
    const { coords } = await getCurrentPositionAsync({
      enableHighAccuracy: true,
    })

    const { latitude, longitude } = coords
    const diameter = parseStringAsArray(diameters)
    const date = new Date()
    
    if (!name.trim()){
      Alert.alert('Nome inválido', `O nome "${name}" não é valido, insira ao menos caractere para cadastrar a planta`)
      return 
    }
    else if (!Number(height)) {
      Alert.alert('Altura inválida', `A altura tem o seguinte formato, "3.1" e não "${height}"`)
      return
    }
    else if (!diameter || !diameters) {
      Alert.alert('Diâmetros inválidos', `O formato para diâmetro(s) é o seguinte "3.1, 2, 0.3", todos os espaços são ignorados`)
      return 
    }
    

    let plant = {
      name,
      city: folder.city,
      uf: folder.state,
      string,
      diameter,
      height: Number(height),
      latitude,
      longitude,
      date
    }
  
    try {
      const data = await AsyncStorage.getItem('plants')
      if (data !== null) {
        let newData = JSON.parse(data)
        
        newData.push(plant)
        await AsyncStorage.setItem('plants', JSON.stringify(newData))
      } 
    } catch (error) {
      Alert.alert('Erro ao acessar plantas da pasta')
    }

    //precisa acontecer o refresh
    navigation.reset({
      index: 1,
      routes: [{name: 'Home'}, {name: 'FolderInside', params: {folder}}]
    })
  }

  return (
    <Container>
      <Content>
        <Input 
          placeholder="Nome popular"
          value={name}
          onChangeText={(text) => setName(text)}
          keyboardType="default"
          />
        <Input 
          placeholder="Altura"
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
        />

        <DiameterInput>
          <FitaButton onPress={FitaToggle}>
            <Ionicons name="ios-checkmark" size={24} color={string? '#000': '#fff'}/>
            <FitaLabel>Fita</FitaLabel>
          </FitaButton>
          <Input 
          placeholder="Diâmetro(s)"
          value={diameters}
          onChangeText={(text) => setDiameters(text)}
          keyboardType="numeric"
          />
        </DiameterInput>
        <SubmitArea>
          <SubmitButtonLocal onPress={handleAddOffline}>
            <TextContent>Adicionar local</TextContent>
            <Ionicons name="ios-leaf" size={14} />
          </SubmitButtonLocal>

          <SubmitButtonOnline onPress={handleAddOnline}>
            <TextContent>Adicionar online</TextContent>
            <Ionicons name="ios-leaf" size={14} />
          </SubmitButtonOnline>
        </SubmitArea>
      </Content>
    </Container>
  );
}

export default AddItemScreen;