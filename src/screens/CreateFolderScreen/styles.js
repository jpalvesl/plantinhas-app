import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.bg};
`;

export const InputView = styled.View`
  margin-top: 24px;
`;

export const Input = styled.TextInput`
  background: #fff;
  color: #000;
  height: 50px;
  font-size: 24px;
  border-radius: 32px;
  margin: 0 16px;
  margin-bottom: 8px;
  padding-left: 16px;

`;

export const CheckButton = styled.TouchableOpacity`
  background: #F8D3D355;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #F8A3D3;
  position: absolute;
  bottom: 10px;
  right: 10px;
  align-items: center;
  justify-content: center;
`;

