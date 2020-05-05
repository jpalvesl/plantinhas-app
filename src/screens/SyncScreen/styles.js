import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #132B35;
  justify-content: center;
`;

export const SyncButton = styled.TouchableOpacity`
  background: #000;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-radius: 48px;
  margin: 0 16px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 26px;
`;
