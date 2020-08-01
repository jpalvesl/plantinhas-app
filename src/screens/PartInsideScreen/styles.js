import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  background: ${colors.bg};
  flex: 1;
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

export const ItemList = styled.View`
  background: ${colors.box};
  min-height: 100px;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
  position: relative;
`;

export const PlantName = styled.Text`
  font-size: 24px;
  text-align: center;
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

export const EditButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const TrashButton = styled.TouchableOpacity`
  position: absolute;
  padding: 10px;
  top: 0px;
  right: 0px;
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