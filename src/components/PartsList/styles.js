import styled from 'styled-components';
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
  padding-right: 60px;
  position: relative;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ActionButtons = styled.View`
  width: 70px;
  position: absolute;
  justify-content: space-between;
  flex-direction: row;
  bottom: 10px;
  right: 10px;
`;

export const Button = styled(BorderlessButton)``;

export const TrashButton = styled(BorderlessButton)`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 5px;
  padding: 5px;
`;
