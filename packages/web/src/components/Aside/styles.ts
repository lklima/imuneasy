import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  background-color: ${props => props.theme.colors.white};
  padding-left: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;

  > svg {
    margin-left: 20px;
    font-size: 25px;
    color: #F00;
  }
`;

export const Title = styled.h3`
  color: ${ props => props.theme.colors.black};
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const MenuItemLink = styled.a`
  color: ${ props => props.theme.colors.menuText};
  text-decoration: none;

  margin: 7px 0;
  display: flex;
  align-items: center;

  padding: 10px 0;
  transition: all .3s;

  margin-right: 20px;
  padding: 15px;
  border-radius: 5px;

  font-size: 16px;

  &:hover {
    background-color: #F0F3F8;
  }

  > svg {
    font-size: 25px;
    margin-right: 10px;
  }
`;


export const MenuItemButton = styled.button`
  color: ${ props => props.theme.colors.warning};
  text-decoration: none;

  margin: 7px 0;
  display: flex;
  align-items: center;

  font-size: 16px;
  border: none;
  background-color: transparent;

  transition: opacity .3s;

  margin-right: 20px;
  padding: 15px;
  border-radius: 5px;


  &:hover {
    background-color: rgba(228, 76, 78, .4);
  }

  > svg {
    font-size: 18px;
    margin-right: 10px;
  }
`;
