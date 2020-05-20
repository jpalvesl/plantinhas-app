import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #132B35;
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

export const Bold = styled.Text`
  font-weight: bold;
`;

export const ItemList = styled.TouchableHighlight`
`;

export const ItemContent = styled.View`
  background: #F8D3D3;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const City = styled.Text`
  color: #000;
  font-size: 24px;
`;

export const State = styled.Text`
  color: #000;
  font-size: 24px;
`;

export const AddButton = styled.TouchableOpacity`
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
