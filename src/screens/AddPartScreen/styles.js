import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  background: ${colors.bg};
  flex: 1;
`;

export const Wrapper = styled.ScrollView``;

export const TextInput = styled.TextInput`
  background: #fff;
  height: 50px;
  padding-left: 20px;
  border-radius: 25px;
  font-size: 20px;
  margin: 8px 16px;
  margin-bottom: 0;
`; 

export const OkButton = styled.TouchableOpacity`
  background: #ff0;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  align-items: center;
  justify-content: center;
`;