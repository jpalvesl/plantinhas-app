import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, List, ItemList, ItemContent, AddItemButton, PlantName, MeanDiameter, Fita, Bold, Height } from './styles';

function FolderInsideScreen() {
  const navigation = useNavigation();

  function NavigateToEditItem(){
    navigation.navigate('EditItem')
  }

  function NavigateToAddItem(){
    navigation.navigate('AddItem')
  }
  
  return (
    <Container>
      <List 
        data={[1,2,3,4,5]}
        keyExtractor={value => String(value)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: value }) => (
          <ItemList onPress={NavigateToEditItem}>
            <ItemContent>
              <PlantName>Nome da Planta</PlantName>
              <MeanDiameter><Bold>Diâmetro médio</Bold>: {value}m</MeanDiameter>
              <Height><Bold>Altura</Bold>: 1,2m</Height>
              <Fita><Bold>Fita</Bold>: <Ionicons name="ios-checkmark" size={16}/></Fita>
            </ItemContent>
          </ItemList>
          )
        }
      />

      <AddItemButton onPress={NavigateToAddItem}>
        <Ionicons name="ios-leaf" size={30} />
      </AddItemButton>
    </Container>
  );
}

export default FolderInsideScreen;