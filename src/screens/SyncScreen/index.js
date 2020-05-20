import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage, Alert } from 'react-native';

import { Container, SyncButton, ButtonLabel } from './styles';

import api from '../../services/api';

function SyncScreen() {
  const navigation = useNavigation();

  async function handleSync() {
    try {
      const data = await AsyncStorage.getItem('plants')
      
      if (data !== null && data != '[]') {
        const newData = JSON.parse(data)

        for (let plant of newData) {
          await api.post('/plants', plant)
        }
        await AsyncStorage.setItem('plants', '[]')
        Alert.alert('OK', 'Todas as plantas foram sincronizadas')
      }
      else {
        Alert.alert('Não há plantas')
      }

    } catch (error) {
      Alert.alert('Erro ao sincronizar com o servidor', 'Tente novamente em alguns segundos')
    }

    navigation.navigate('Home')
  }


  return (
    <Container>
      <SyncButton onPress={handleSync}>
        <ButtonLabel>Sincronizar dados</ButtonLabel>
      </SyncButton>
    </Container>
  );
}

export default SyncScreen;