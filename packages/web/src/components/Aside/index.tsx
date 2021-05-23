import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as S from './styles';

export const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <GiIcons.GiLoveInjection />
        <S.Title>ImunEasy</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="/">
          <AiIcons.AiOutlineDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="/campaigns">
          <AiIcons.AiOutlinePlusSquare />
          Campanhas
        </S.MenuItemLink>
        <S.MenuItemLink href="/stock">
          <AiIcons.AiOutlineStock />
          Estoque
        </S.MenuItemLink>
        <S.MenuItemLink href="/register">
          <AiIcons.AiOutlineUserAdd />
          Cadastro
        </S.MenuItemLink>
        <S.MenuItemButton onClick={() => {}}>
          <MdIcons.MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
}
