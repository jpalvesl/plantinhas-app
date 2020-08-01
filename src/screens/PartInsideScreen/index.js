import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Counter, List, ItemList, PlantName, Height, MeanDiameter, Fita, Bold, AddItemButton, TrashButton, EditButton } from './styles';

function PartInsideScreen() {
  // const { plants } = useContext(MainContext);

  // const [filteredPlants, setFilteredPlants] = useState([]);
  
  const navigation = useNavigation();
  // const route = useRoute();

  // const folder = route.params.folder;

  // useEffect(() => {
  //   function plantFilter(arrayPlants) {
  //     return arrayPlants.filter((plant) => (plant.city === folder.city && plant.uf === folder.state))
  //   }

  //   const FilteredData = plantFilter(plants)
  //   setFilteredPlants(FilteredData)
  // }, [plants])


  function NavigateToEditItem(plant){
    navigation.navigate('EditItem')
  }

  function NavigateToAddItem(){
    navigation.navigate('AddItem')
  }
  
  return (
    <Container>
      <Counter>Essa parcela contém <Bold>{2} planta(s)</Bold></Counter>

      <List 
        data={[0, 1]}
        keyExtractor={(item, index) => `${item}_${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: plant }) => (
          <ItemList>
            <PlantName>{'plant.name'}</PlantName>
            <MeanDiameter>
               <Bold>Diâmetro Médio</Bold>:xx.00cm *  {/*{getMeanOfArray(plant.diameter)}cm {plant.string ? '*' : ''} */}
            </MeanDiameter>
            <Height><Bold>Altura</Bold>: {3}m</Height>
            <Fita><Bold>Fita</Bold>: {true? 'sim' : 'não'}</Fita>
          
            <TrashButton onPress={() => alert('deve apagar')}>
              <Ionicons name='ios-trash' size={20} color='#000' />
            </TrashButton>

            <EditButton onPress={() => NavigateToEditItem()}>
              <Ionicons name='ios-create' size={30} color='#000' />
            </EditButton>
          </ItemList>
          )
        }
      />

      <AddItemButton onPress={() => NavigateToAddItem()}>
        <Ionicons name="ios-leaf" size={30} />
      </AddItemButton>
    </Container>
  );
}

export default PartInsideScreen;