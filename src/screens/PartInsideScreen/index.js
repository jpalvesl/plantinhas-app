import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, Bold, AddButton } from './styles';
import { MainContext } from '../../contexts/MainContext';

import Header from '../../components/Header';
import PlantsList from '../../components/PlantsList';

function PartInsideScreen() {
  const { plants } = useContext(MainContext);

  const [filteredPlants, setFilteredPlants] = useState([]);
  
  const navigation = useNavigation();
  const route = useRoute();

  const folder = route.params.folder;
  const part = route.params.part;

  useEffect(() => {
    function plantFilter(arrayPlants) {
      return arrayPlants.filter((plant) => (plant.city === folder.city && plant.uf === folder.state))
    }

    const FilteredData = plantFilter(plants)
    setFilteredPlants(FilteredData)
  }, [plants])

  function NavigateToAddItem(){
    navigation.navigate('AddItem', { folder })
  }
  
  return (
    <>
      <Header 
        hasGoBack
        title='Plantas da parcela'
        rightButton={(
          <AddButton onPress={() => NavigateToAddItem()}>
            <Ionicons name="ios-add" size={30} />
          </AddButton>
        )}
      />
      <Container>
        <Counter>Essa parcela contém <Bold>{filteredPlants.length} planta(s)</Bold></Counter>

        <PlantsList
          filteredPlants={filteredPlants}
        />
      </Container>
    </>
  );
}

export default PartInsideScreen;