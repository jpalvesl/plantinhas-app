import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, BackButton, Title, Content } from './styles';
import { useNavigation } from '@react-navigation/native';

function Header({ title, hasGoBack, rightButton }) {
  const { goBack } = useNavigation()

  return (
    <Container>
      <Content>
        {hasGoBack && (
          <BackButton onPress={goBack}>
            <Ionicons name="arrow-back" size={30} color="#000" />
          </BackButton> 
        )}

        <Title>{title}</Title>

        {rightButton}
      </Content>
    </Container>
  )
}

export default Header;