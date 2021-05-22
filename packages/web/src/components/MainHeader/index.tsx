import React, { useMemo } from 'react';
import * as MdIcon from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { emojis } from '../../utils/emojis';

import * as S from './styles';

export const MainHeader: React.FC = () => {
  const history = useHistory();
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <S.Container>
        <S.BackButton onClick={() => history.goBack()}>
          <MdIcon.MdArrowBack />
        </S.BackButton> :
        <div />
      <S.Profile>
        <S.Welcome>Olá! {emoji}</S.Welcome>
        <S.UserName>Danilo M.</S.UserName>
      </S.Profile>
    </S.Container>
  );
}
