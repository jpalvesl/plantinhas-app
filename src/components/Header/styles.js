import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 70px;
  background-color: #fff;
  elevation: 3;
`;
  
export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 0 16px;
`;

export const BackButton = styled(BorderlessButton)`
`;

export const Title = styled.Text`
  margin: auto;
  font-size: 18px;
`;

