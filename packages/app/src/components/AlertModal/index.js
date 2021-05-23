import React from 'react';

// styles
import { Container, Title, Icon, Button, ButtonText } from './styles';

// media
import alert from '../../assets/images/alert.gif';

const AlertModal = ({ isOpen, stopAlert }) => (
  <Container
    coverScreen
    backButtonClose={false}
    backdropPressToClose={false}
    swipeToClose={false}
    isOpen={isOpen}>
    <Title>Tempertura Anormal</Title>
    <Icon resizeMode="contain" source={alert} />
    <Button onPress={stopAlert}>
      <ButtonText>Estou Ciente</ButtonText>
    </Button>
  </Container>
);

export default AlertModal;
