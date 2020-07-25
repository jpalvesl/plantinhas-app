import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.bg};
  justify-content: center;
`;

export const Card = styled.View`
  background: ${colors.box};
  height: 250px;
  margin: 0 24px;
  border-radius: 16px;
  padding: 0 8px;
  justify-content: center;
`;

export const PlantName = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

export const CardTopic = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const CardText = styled.Text`
  font-size: 14px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const BackButon = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ButonLabel = styled.Text`
  color: #f00;
  font-size: 26px;
`;
