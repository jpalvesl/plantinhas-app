import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #132B35;
`;

export const Counter = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 16px 8px 8px 8px;
`;

export const List = styled.FlatList`
  margin: 0 16px;
  margin-top: 8px;
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


export const AddItemButton = styled.TouchableOpacity`
  background: #c4c4c4ee;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
`;