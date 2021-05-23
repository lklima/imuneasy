import React, { useEffect, useState } from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as S from './styles';

import logo from '../../assets/img/imunEasylogo.svg';
import { useHistory } from 'react-router-dom';


const routes = [
  {
    pathname: '/',
    title: 'Dashboard',
    icon: <AiIcons.AiOutlineDashboard />
  },
  {
    pathname: '/campaigns',
    title: 'Campanhas',
    icon: <AiIcons.AiOutlinePlusSquare />
  },
  {
    pathname: '/units',
    title: 'Unidades',
    icon: <AiIcons.AiOutlineTable />
  },
  {
    pathname: '/users',
    title: 'Usuários',
    icon: <AiIcons.AiOutlineUserAdd />
  },
  {
    pathname: '/stocks',
    title: 'Estoque',
    icon: <AiIcons.AiOutlineStock />
  },
  {
    pathname: '/attendance',
    title: 'Atendimento',
    icon: <AiIcons.AiOutlineCarryOut />
  },
]


export const Aside: React.FC = () => {
  const history = useHistory();
  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="" />
      </S.Header>

      <S.MenuContainer>
        <div>
          {
            routes.map(route => {
              return (
                <S.MenuItemLink 
                isActive={history.location.pathname === route.pathname} 
                href={route.pathname}>
                  {route.icon}
                  {route.title}
                </S.MenuItemLink>
              )
            })
          }
        </div>
        <div>
          <S.MenuItemButton onClick={() => {}}>
            <MdIcons.MdExitToApp />
            Sair
          </S.MenuItemButton>
        </div>
      </S.MenuContainer>
    </S.Container>
  );
}
