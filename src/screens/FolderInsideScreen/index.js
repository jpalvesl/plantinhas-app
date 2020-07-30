import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, List, ItemList, ItemContent, AddItemButton, PlantName, MeanDiameter, Fita, Bold, Height } from './styles';
import { MainContext } from '../../contexts/MainContext';

import getMeanOfArray from '../../utils/getMeanOfArray';

function FolderInsideScreen() {
  const { plants } = useContext(MainContext);

  const [filteredPlants, setFilteredPlants] = useState([]);
  
  const navigation = useNavigation();
  const route = useRoute();

  const folder = route.params.folder;

  useEffect(() => {
    function plantFilter(arrayPlants) {
      return arrayPlants.filter((plant) => (plant.city === folder.city && plant.uf === folder.state))
    }

    const FilteredData = plantFilter(plants)
    setFilteredPlants(FilteredData)
  }, [plants])


  function NavigateToEditItem(plant){
    navigation.navigate('EditItem', { plant })
  }

  function NavigateToAddItem(){
    navigation.navigate('AddItem', { folder })
  }
  
  return (
    <Container>
      <Counter>Essa pasta contém <Bold>{filteredPlants.length} planta(s)</Bold></Counter>

      <List 
        data={filteredPlants}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: plant }) => (
          <ItemList onPress={() => NavigateToEditItem(plant)}>
            <ItemContent>
              <PlantName>{plant.name}</PlantName>
              <MeanDiameter>
                <Bold>Diâmetro Médio</Bold>: {getMeanOfArray(plant.diameter)}cm {plant.string ? '*' : ''}
              </MeanDiameter>
              <Height><Bold>Altura</Bold>: {plant.height}m</Height>
              <Fita><Bold>Fita</Bold>: {plant.string? 'sim' : 'não'}</Fita>
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