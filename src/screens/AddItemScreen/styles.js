import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #132B35;
`;

export const Content = styled.SafeAreaView`
  margin: 24px 16px 0 16px;
`;

export const Input = styled.TextInput`
  background: #fff;
  color: #000;
  height: 50px;
  font-size: 24px;
  border-radius: 32px;
  margin-bottom: 8px;
  padding: 0 16px;
  flex: 1;
`;

export const DiameterInput = styled.View`
  flex-direction: row;
`;

export const FitaButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #fff;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`;

export const FitaLabel = styled.Text`
  font-size: 14px;
`;

export const SubmitArea = styled.View`
  flex-direction: row;
`;

export const SubmitButtonLocal = styled.TouchableOpacity`
  background: #fff;
  height: 50px;
  border-radius: 32px;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
  margin-right: 8px;

`;

export const SubmitButtonOnline = styled.TouchableOpacity`
  background: #91BC34;
  height: 50px;
  border-radius: 32px;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
`;

export const TextContent = styled.Text`
  font-size: 14px;
`;