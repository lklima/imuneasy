import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as S from './styles';

import logo from '../../assets/img/imunEasylogo.svg';

export const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="" />
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="/">
          <AiIcons.AiOutlineDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="/attendance">
          <AiIcons.AiOutlineCarryOut />
          Atendimento
        </S.MenuItemLink>
        <S.MenuItemLink href="/campaigns">
          <AiIcons.AiOutlinePlusSquare />
          Campanhas
        </S.MenuItemLink>
        <S.MenuItemLink href="/stocks">
          <AiIcons.AiOutlineStock />
          Estoque
        </S.MenuItemLink>
        <S.MenuItemLink href="/users">
          <AiIcons.AiOutlineUserAdd />
          Usuários
        </S.MenuItemLink>
        <S.MenuItemLink href="/units">
          <AiIcons.AiOutlineTable />
          Unidades
        </S.MenuItemLink>
        <S.MenuItemButton onClick={() => {}}>
          <MdIcons.MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
}
