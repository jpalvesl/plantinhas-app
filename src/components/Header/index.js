import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, BackButton, Title, Content } from './styles';

function Header({ title, hasGoBack, rightButton }) {
  return (
    <Container>
      <Content>
        {hasGoBack && (
          <BackButton onPress={() => {}}>
            <Ionicons name="ios-arrow-round-back" size={30} color="#000" />
          </BackButton> 
        )}

        <Title>{title}</Title>

        {rightButton}
      </Content>
    </Container>
  )
}

export default Header;