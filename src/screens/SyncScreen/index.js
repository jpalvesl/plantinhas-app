import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Container, SyncButton, ButtonLabel } from './styles';
import { MainContext } from '../../contexts/MainContext';

import api from '../../services/api';

function SyncScreen() {
  const { plants, addSyncPlant, attPlants } = useContext(MainContext)
  const navigation = useNavigation();

  async function handleSync() {
    if (!plants.length) return Alert.alert('Não há plantas')
    
    try {
      for (let plant of plants) {
        await api.post('/plants', plant)
        addSyncPlant(plant)
      }
      attPlants([])
      Alert.alert('OK', 'Todas as plantas foram sincronizadas')        
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