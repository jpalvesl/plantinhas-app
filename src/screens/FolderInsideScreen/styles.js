import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.bg};
`;

export const Counter = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 16px 8px 8px 8px;
`;

export const List = styled.FlatList`
  margin: 0 16px;
  margin-top: 8px;
`;

export const ItemList = styled.View`
  background: ${colors.box};
  min-height: 100px;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 60px;
  position: relative;
`;

export const ActionButtons = styled.View`
  width: 70px;
  position: absolute;
  justify-content: space-between;
  flex-direction: row;
  bottom: 10px;
  right: 10px;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Action = styled.TouchableOpacity``;

export const TrashButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const AddItemButton = styled.TouchableOpacity`
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