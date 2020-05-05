import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #132B35;
`;

export const List = styled.FlatList`
  margin: 0 16px;
  margin-top:24px;
`;

export const ItemList = styled.TouchableHighlight``;

export const ItemContent = styled.View`
  background: #F8D3D3;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0 16px;
  justify-content: center;
`;

export const PlantName = styled.Text`
  font-size: 24px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;


export const MeanDiameter = styled.Text`
  font-size: 14px;
`;

export const Height = styled.Text`
  font-size: 14px;
`;


export const Fita = styled.Text`
  font-size: 14px;
`;