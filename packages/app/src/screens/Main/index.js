import React, { useState, useEffect } from 'react';
import { Header } from 'react-native-elements';

// styles
import {
  header,
  Container,
  SubContent,
  ImageContent,
  Signal,
  Image,
  InfoContent,
  Unity,
  ValuesContent,
} from './styles';

// media
import refrigerator from '../../assets/images/refrigerator.png';
import signal from '../../assets/images/signal.gif';

// components
import Temp from '../../components/Temp';
import Umidity from '../../components/Umidity';
import AlertModal from '../../components/AlertModal';

// services
import { alert, stopAlert } from '../../services';

const data = {
  temp: 5,
  umidity: 30,
};

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      alert();
      setOpenModal(true);
    }, 5000);
  }, []);

  const handleStop = () => {
    stopAlert();
    setOpenModal(false);
  };

  return (
    <Container>
      <Header
        centerComponent={{ text: 'MONITORAMENTO', style: header.text }}
        containerStyle={header.container}
        backgroundColor="#37C9D3"
      />
      <SubContent>
        <ImageContent>
          <Image resizeMode="contain" source={refrigerator} />
          <Signal resizeMode="contain" source={signal} />
        </ImageContent>
        <InfoContent>
          <Unity>UBS Palmeiras do Norte</Unity>
          <ValuesContent>
            <Temp data={data} />
            <Umidity data={data} />
          </ValuesContent>
        </InfoContent>
      </SubContent>
      <AlertModal isOpen={openModal} stopAlert={handleStop} />
    </Container>
  );
};

export default Main;
