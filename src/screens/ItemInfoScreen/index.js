import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, Card, CardTopic, Bold, PlantName, DiametersLabel, MeanDiameterLabel, FitaLabel, HeightLabel, CityLabel, StateLabel, BackButon, ButonLabel } from './styles';

function ItemInfoScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Card>
        <PlantName>Nome da planta</PlantName>

        <CardTopic>
          <DiametersLabel><Bold>Diâmetro(s)</Bold>: xx xx</DiametersLabel>
          <MeanDiameterLabel><Bold>Média</Bold>: xx</MeanDiameterLabel>
          <FitaLabel>
            <Bold>Fita</Bold>: <Ionicons name="ios-checkmark" size={16}/>
          </FitaLabel>
        </CardTopic>

        <CardTopic>
          <HeightLabel><Bold>Altura</Bold>: xx</HeightLabel>
        </CardTopic>

        <CardTopic>
          <CityLabel><Bold>Cidade</Bold>: Campina Grande</CityLabel>
          <StateLabel><Bold>Estado</Bold>: PB</StateLabel>
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