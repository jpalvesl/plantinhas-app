import React from 'react';

import { Container, SyncButton, ButtonLabel } from './styles';

function SyncScreen() {
  return (
    <Container>
      <SyncButton onPress={() => alert('Sincronizando dados')}>
        <ButtonLabel>Sincronizar dados</ButtonLabel>
      </SyncButton>
    </Container>
  );
}

export default SyncScreen;