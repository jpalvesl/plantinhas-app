import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  background: ${colors.bg};
  flex: 1;
`;

export const TextInput = styled.TextInput`
  height: 50px;
  border-radius: 25px;
  padding-left: 20px;
  background: #fff;
  margin: 0 16px;
  margin-top: 8px;
  font-size: 24px;
`; 

export const CheckButton = styled.TouchableOpacity`
  background: #fffa;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
`;