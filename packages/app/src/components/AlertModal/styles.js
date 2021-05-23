import Modal from 'react-native-modalbox';
import styled from 'styled-components/native';

export const Container = styled(Modal)`
  width: 80%;
  height: 300px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: solid 2px #ff0000;
`;

export const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Icon = styled.Image`
  height: 110px;
  width: 110px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: #ff0000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
