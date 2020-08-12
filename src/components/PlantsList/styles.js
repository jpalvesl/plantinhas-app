import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

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

export const ItemText = styled.Text`
  font-size: 14px;
`;

export const EditButton = styled(BorderlessButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const TrashButton = styled(BorderlessButton)`
  position: absolute;
  margin: 5px;
  padding: 5px;
  top: 0px;
  right: 0px;
`;
