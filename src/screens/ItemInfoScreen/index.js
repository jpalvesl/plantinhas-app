import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Card, CardTopic, Bold, PlantName, CardText, BackButon, ButonLabel } from './styles';

import getMeanOfArray from '../../utils/getMeanOfArray';

function ItemInfoScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const plant = route.params.plant

  return (
    <Container>
      <Card>
        <PlantName>{plant.name}</PlantName>

        <CardText><Bold>Diâmetro(s)</Bold>: {plant.diameter.map(item => item.toFixed(2)).join('cm, ')}cm</CardText>
        <CardText><Bold>Diâmetro Médio</Bold>: {getMeanOfArray(plant.diameter)}cm</CardText>
        <CardText>
          <Bold>Fita</Bold>: {plant.string ? <Ionicons name="ios-checkmark" size={16}/> : ''}
        </CardText>


        <CardTopic>
          <CardText><Bold>Altura</Bold>: {plant.height}m</CardText>
        </CardTopic>

        <CardTopic>
          <CardText><Bold>Cidade</Bold>: {plant.city}</CardText>
          <CardText><Bold>Estado</Bold>: {plant.uf}</CardText>
        </CardTopic>

        <BackButon onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={26} color="#f00"/>
          <ButonLabel>Voltar</ButonLabel>
        </BackButon>
      </Card>
    </Container>
  );
}

export default ItemInfoScreen;