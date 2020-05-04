import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, List, ItemList, ItemContent, City, State, AddButton } from './styles';

function HomeScreen() {
  const navigation = useNavigation();

  function NavigateToCreateFolder() {
    navigation.navigate('CreateFolder')
  }

  return (
    <Container>
      <List 
        data={[5,66,321,55555,555555555 ]}
        keyExtractor={value => String(value)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: value }) => (
          <ItemList onPress={() => navigation.navigate('FolderInside')}>
            <ItemContent>
              <City>Cidade {value}</City>
              <State>PB</State>
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