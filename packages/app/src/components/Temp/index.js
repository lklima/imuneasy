import React from 'react';

// styles
import { Container, Value, Circle, Icon, Description } from './styles';

// media
import temp from '../../assets/images/temp.png';

// utils
import { handleColor } from './utils';

const Temp = ({ data }) => (
  <Container>
    <Circle color={handleColor(data.temp)}>
      <Icon source={temp} />
      <Value>{data.temp} C°</Value>
    </Circle>
    <Description>Temperatura</Description>
  </Container>
);

export default Temp;
