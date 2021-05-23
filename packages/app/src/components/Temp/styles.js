import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Circle = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: solid 5px ${props => props.color};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  height: 60px;
  width: 60px;
`;

export const Value = styled.Text`
  font-size: 27px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: #979797;
`;
