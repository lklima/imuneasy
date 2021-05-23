import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const header = StyleSheet.create({
  container: {
    backgroundColor: '#37C9D3',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export const Container = styled.View`
  flex: 1;
  background-color: #edeff3;
`;

export const SubContent = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  margin: 15px;
  align-items: center;
`;

export const ImageContent = styled.View`
  width: 300px;
  height: 300px;
  margin-top: 20px;
`;

export const Signal = styled.Image`
  height: 120px;
  width: 120px;
  tint-color: #37c9d3;
  position: absolute;
  right: 30px;
  top: 15px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

export const InfoContent = styled.View`
  width: 90%;
  margin-top: 30px;
`;

export const Unity = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const ValuesContent = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;
