import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, List, ItemList, City, State, AddButton } from './styles';

function HomeScreen() {
  return (
    <Container>
      <List 
        data={[5,66,321,55555,555555555 ]}
        keyExtractor={value => String(value)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: value }) => (
          <ItemList>
            <City>Cidade {value}</City>
            <State>PB</State>
          </ItemList>
          )
        }
      />
      <AddButton onPress={() => alert('teste')}>
        <Ionicons name="ios-add" size={30} />
      </AddButton>
    </Container>
  );
}

export default HomeScreen;