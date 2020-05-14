import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Card, CardTopic, Bold, PlantName, DiametersLabel, MeanDiameterLabel, FitaLabel, HeightLabel, CityLabel, StateLabel, BackButon, ButonLabel } from './styles';

import getMeanOfArray from '../../utils/getMeanOfArray';

function ItemInfoScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const plant = route.params.plant

  return (
    <Container>
      <Card>
        <PlantName>{plant.name}</PlantName>

        <CardTopic>
          <DiametersLabel><Bold>Diâmetro(s)</Bold>: {plant.diameter.join(', ')}</DiametersLabel>
          <MeanDiameterLabel><Bold>Média</Bold>: {getMeanOfArray(plant.diameter)}</MeanDiameterLabel>
          <FitaLabel>
            <Bold>Fita</Bold>: {plant.string ? <Ionicons name="ios-checkmark" size={16}/> : ''}
          </FitaLabel>
        </CardTopic>

        <CardTopic>
          <HeightLabel><Bold>Altura</Bold>: {plant.height}</HeightLabel>
        </CardTopic>

        <CardTopic>
          <CityLabel><Bold>Cidade</Bold>: {plant.city}</CityLabel>
          <StateLabel><Bold>Estado</Bold>: {plant.uf}</StateLabel>
        </CardTopic>

        <BackButon onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={40} color="#f00"/>
          <ButonLabel>Voltar</ButonLabel>
        </BackButon>
      </Card>
    </Container>
  );
}

export default ItemInfoScreen;