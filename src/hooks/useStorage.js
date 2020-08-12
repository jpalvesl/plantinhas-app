import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';


function useStorage(key) {
  const [storage, setStorage] = useState([]);
  
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

  return [storage, setStorage];
}

export default useStorage;