import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.bg};
`;

export const List = styled.FlatList`
  margin: 0 16px;
  margin-top: 8px;
`;

export const Counter = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 16px 8px 8px 8px;
`;

export const ItemList = styled.TouchableHighlight``;

export const ItemContent = styled.View`
  background: ${colors.box};
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