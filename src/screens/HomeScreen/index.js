import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import { Container, Counter, Bold, List, ItemList, ItemContent, City, State, AddButton } from './styles';

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
  }, [])

  function NavigateToCreateFolder() {
    navigation.navigate('CreateFolder', { folders })
  }

  return (
    <Container>
      <Counter>Existem <Bold>{folders.length}</Bold> pastas</Counter>
      <List 
        data={folders}
        keyExtractor={(value) => String(value.city+value.state)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: folder }) => (
          <ItemList onPress={() => navigation.navigate('FolderInside', { folder })}>
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