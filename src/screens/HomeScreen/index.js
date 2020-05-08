import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, List, ItemList, ItemContent, City, State, AddButton } from './styles';

function HomeScreen() {
  const [folders, setFolders] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function LoadFolders() {
      try {
        const data = await AsyncStorage.getItem('folders')
        if (data !== null) {
          setFolders(JSON.parse(data))
        } 
        else alert('Não há pastas') 
        
      } catch (error) {
        alert('Erro ao carregar pastas, tente novamente')
      }
    }

    LoadFolders()
    console.log(folders)
  }, [])

  function NavigateToCreateFolder() {
    navigation.navigate('CreateFolder')
  }

  return (
    <Container>
      <List 
        data={folders}
        keyExtractor={(value) => String(value.city+value.state)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: folder }) => (
          <ItemList onPress={() => navigation.navigate('FolderInside')}>
            <ItemContent>
              <City>{folder.city}</City>
              <State>{folder.state}</State>
            </ItemContent>
          </ItemList>
          )
        }
      />
      <AddButton onPress={NavigateToCreateFolder}>
        <Ionicons name="ios-add" size={30} />
      </AddButton>
    </Container>
  );
}

export default HomeScreen;