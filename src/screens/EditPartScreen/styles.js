import styled from 'styled-components/native';

import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  background: ${colors.bg};
  flex: 1;
`;

export const Wrapper = styled.ScrollView`
  margin-top: 16px;
`;

export const TextInput = styled.TextInput`
  background: #fff;
  height: 50px;
  padding-left: 20px;
  border-radius: 25px;
  font-size: 20px;
  margin: 8px 16px;
  margin-bottom: 0;
`; 

export const OkButton = styled(RectButton)`
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