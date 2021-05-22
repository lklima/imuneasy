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
  color: ${props => props.theme.colors.titleText};
`;

export const BackButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;

  > svg {
    font-size: 25px;
  }
`;

export const Welcome = styled.h3``;
export const UserName = styled.span``;
