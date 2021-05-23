import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;

  color: ${ props => props.theme.colors.titleText};
  background-color: ${ props => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitlePage = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  color: #000;
  font-weight: bold;
  font-size: 28px;
  margin-left: 15px;
  border-bottom: solid 6px #37C9D3;
  text-transform: uppercase;

  > svg {
    font-size: 25px;
  }
`;

export const Avatar = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 28px;
  background-color: #37C9D3;
`;
export const UserName = styled.span`
  margin-right: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #B0B0B1;
`;
