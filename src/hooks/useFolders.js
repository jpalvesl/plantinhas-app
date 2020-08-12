import useStorage from './useStorage';
import { AsyncStorage } from 'react-native';

function useFolders(key) {
  const [folders, setFolders] = useStorage(key);

  async function addFolder(folder) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify([...folders, folder]))
      setFolders([...folders, folder])
    } catch (error) {
      console.log('Erro ao adicionar nova pasta')
    }
  }

  async function addPart(index, part) {
    try {
      folders[index].parts.push(part)
      await AsyncStorage.setItem(key, JSON.stringify(folders))
      setFolders([...folders])
    } catch (error) {
      console.log('Erro ao adicionar nova parcela')
    }
  }

  return [folders, addFolder, addPart]
}

export default useFolders;