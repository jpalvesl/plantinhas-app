import useStorage from './useStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

function usePlants(key) {
  const [plants, setPlants] = useStorage(key);

  async function addItem(plant) {
    try {
      setPlants([...plants, plant])
      await AsyncStorage.setItem(key, JSON.stringify([...plants, plant]))
    } catch (error) {
      console.log('Erro ao adicionar planta')
    }
  }

  async function attPlants(items) {
    try {
      setPlants([...items])
      await AsyncStorage.setItem(key, JSON.stringify([...items]))
    } catch (error) {
      console.log('Erro ao atualizar estado')
    }
  }

  return [plants, attPlants, addItem]
}

export default usePlants;