import React from 'react';

import { Aside } from '../Aside';
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';

import * as S from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </S.Container>
  );
}
