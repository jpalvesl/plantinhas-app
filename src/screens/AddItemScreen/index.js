import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import { Container, Content, SubmitArea, SubmitButtonLocal, SubmitButtonOnline, TextContent } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import DiameterInput from '../../components/DiameterInput';

import parseStringAsArray from '../../utils/parseStringAsArray';

import { MainContext } from '../../contexts/MainContext';

import api from '../../services/api';

function AddItemScreen() {
  const { addPlant } = useContext(MainContext);

  const [string, setString] = useState(false)
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [diameters, setDiameters] = useState('');
  
  const navigation = useNavigation();
  const route = useRoute();

  const folder = route.params.folder

  useEffect(() => {
    (async() => {
      const { status } = await requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão para acessar localização negada');
      }
    })()
  })

  function fitaToggle() {
    setString((state) => !state)
  }

  async function handleAddPlant(type) {
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

    switch (type) {
      case 'online':
        await api.post('/plants', plant)
        break;
      case 'offline':
        addPlant(plant)
      break;
      default:
        console.error('Erro ao adicionar planta')
        break;
    }
    return navigation.goBack()
  }

  return (
    <>
      <Header
        hasGoBack
        title='Nova planta'
      />
      <Container>
        <Content>
          <Input 
            label="Nome popular"          
            placeholder="Ex: Pata de vaca"
            value={name}
            onChangeText={(text) => setName(text)}
            keyboardType="default"
            />
          <Input 
            label="Altura(m)"          
            placeholder="Ex: 1"
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
          />

          <DiameterInput
            fitaToggle={fitaToggle}
            string={string}
            placeholder="Ex: 1.5, 2.1, 1"
            value={diameters}
            onChangeText={(text) => setDiameters(text)}
            keyboardType="numeric"
          />
          <SubmitArea>
            <SubmitButtonLocal onPress={() => handleAddPlant('offline')}>
              <TextContent>Adicionar local</TextContent>
              <Ionicons name="ios-leaf" size={14} />
            </SubmitButtonLocal>

            <SubmitButtonOnline onPress={() => handleAddPlant('online')}>
              <TextContent>Adicionar online</TextContent>
              <Ionicons name="ios-leaf" size={14} />
            </SubmitButtonOnline>
          </SubmitArea>
        </Content>
      </Container>
    </>
  );
}

export default AddItemScreen;