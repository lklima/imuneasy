import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as MdIcon from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const routes = [
  {
    pathname: '/',
    title: 'Dashboard'
  },
  {
    pathname: '/campaigns',
    title: 'Campanhas'
  },
  {
    pathname: '/units',
    title: 'Unidades'
  },
  {
    pathname: '/users',
    title: 'Usuários'
  },
  {
    pathname: '/stocks',
    title: 'Estoque'
  },
  {
    pathname: '/attendance',
    title: 'Atendimento'
  },
]

export const MainHeader: React.FC = () => {
  const history = useHistory();
  const [titlePage, setTitlePage] = useState('');
  
  useEffect(() => {
    setTitlePage(
      routes.filter(item => item.pathname === history.location.pathname)[0].title
    );    
  }, [history])
  

  return (
    <S.Container>
        <S.TitlePage>
          {titlePage}
        </S.TitlePage>
        <div />
      <S.Profile>
        <S.UserName>Danilo M.</S.UserName>
        <S.Avatar />
      </S.Profile>
    </S.Container>
  );
}
