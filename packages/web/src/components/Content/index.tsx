import React from 'react';

import * as S from './styles';

export const Content: React.FC = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}
