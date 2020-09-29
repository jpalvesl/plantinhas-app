import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  background: ${colors.bg};
  flex: 1;
`;

export const InputView = styled.View`
  margin-top: 16px;
`;

export const CheckButton = styled(RectButton)`
  background-color: #fff;
  height: 40px;
  margin: 8px 16px;
  border-radius: 12px;
  padding: 0 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;