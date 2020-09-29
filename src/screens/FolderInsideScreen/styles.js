import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.bg};
`;

export const Counter = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 16px 8px 8px 8px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const AddButton = styled(BorderlessButton)``;