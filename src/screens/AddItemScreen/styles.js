import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${colors.bg};
`;

export const Content = styled.SafeAreaView`
  margin-top: 24px;
`;

export const SubmitArea = styled.View`
  flex-direction: row;
  margin: 0 16px;
`;

const Button = styled(RectButton)`
  height: 50px;
  border-radius: 12px;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
`;

export const SubmitButtonLocal = styled(Button)`
  background: #fff;
  margin-right: 8px;
`;

export const SubmitButtonOnline = styled(Button)`
  background: #91BC34;
`;

export const TextContent = styled.Text`
  font-size: 14px;
`;