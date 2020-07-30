import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';


function useStorage(key) {
  const [storage, setStorage] = useState([]);

  async function addItem(item) {
    try {
      setStorage([...storage, item])
      await AsyncStorage.setItem(key, JSON.stringify([...storage, item]))
    } catch (error) {
      console.log('Erro ao adicionar item')
    }
  }

  async function attStorage(items) {
    try {
      setStorage([...items])
      await AsyncStorage.setItem(key, JSON.stringify([...items]))
    } catch (error) {
      console.log('Erro ao atualizar estado')
    }
  }
  
  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(key)
        
        if (data !== null) {
          setStorage(JSON.parse(data))
        }
      } catch (error) {
        await AsyncStorage.setItem(key, JSON.stringify(storage))
        console.log('Não encontramos o item no Storage')
      }
    })()
  }, [])

  return [storage, attStorage, addItem];
}

export default useStorage;