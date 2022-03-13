import useStorage from './useStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  async function editFolder(folderIndex, newFolder) {
    try {
      const newFolders = folders.map((folder, index) => {
        if (folderIndex === index) {
          return newFolder
        }
        return folder
      })
      await AsyncStorage.setItem(key ,JSON.stringify(newFolders))
      setFolders(newFolders)
    } catch (error) {
      console.error('Erro ao editar a pasta')
    }
    
  }

  return [folders, addFolder, addPart, editFolder]
}

export default useFolders;