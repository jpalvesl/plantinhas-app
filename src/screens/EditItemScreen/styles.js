import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${colors.bg};
`;

export const Content = styled.SafeAreaView`
  margin: 24px 0 0 0;
`;

export const FitaButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #fff;
  margin-top: auto;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

export const FitaLabel = styled.Text`
  font-size: 14px;
`;

export const SubmitButton = styled(RectButton)`
  background: #91BC34;
  height: 50px;
  border-radius: 12px;
  margin: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
`;

export const TextContent = styled.Text`
  font-size: 20px;
`;