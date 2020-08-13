import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 0 16px;
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  font-size: 20px;
  margin-left: 8px;
  margin-bottom: 4px;
`;

export const InputBlock = styled.View`
  flex-direction: row;
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

export const Input = styled.TextInput`
  background-color: #fff;
  width: 40px;
  height: 40px;
  flex: 1;
  margin-left: 8px;
  border-radius: 12px;
  padding: 0 8px;
`;
