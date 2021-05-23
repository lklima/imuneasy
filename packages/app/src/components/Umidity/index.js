import React from 'react';

// styles
import { Container, Value, Circle, Icon, Description } from './styles';

// media
import umidity from '../../assets/images/umidity.png';

// utils
import { handleColor } from './utils';

const Umidity = ({ data }) => (
  <Container>
    <Circle color={handleColor(data.umidity)}>
      <Icon source={umidity} />
      <Value>{data.umidity} %</Value>
    </Circle>
    <Description>Umidade</Description>
  </Container>
);

export default Umidity;
