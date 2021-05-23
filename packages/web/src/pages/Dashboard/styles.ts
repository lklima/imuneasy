import styled from 'styled-components';

interface VacineItemTableTrProps {
  isMinimum?: boolean;
}

interface VacineItemTableProps {
  isBold?: boolean;
  isBorder?: boolean;
}

export enum StatusCard {
  WARNING = '#EB5757',
  ERROR = '#F2C94C',
  SUCCESS = '#2FAD66'
}

interface CardVacineProps {
  statusCard?: StatusCard;
}

interface CardUBSProps {
  statusCard?: StatusCard;
}

export const Container = styled.div``;

export const TitleContainer = styled.div``;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VacineTable = styled.table`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
  color: #000000;
  height: 100%;
  border-left: solid 14px #24CCD9;
  border-radius: 10px;

  padding: 27px;
`;
export const VacineHeaderTable = styled.th`
  min-width: 100px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  color: #979797;
`;
export const VacineItemTableTr = styled.tr<VacineItemTableTrProps>`
  color: ${props => props.isMinimum ? '#F00' : '#000'};
`;
export const VacineItemTable = styled.td<VacineItemTableProps>`
  font-size: 16px;
  padding: 5px 0;
  height: 45px;
  min-width: 120px;
  font-weight: ${props => props.isBold && 'bold'};
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-left: 20px;
`;

export const CardVacine = styled.div<CardVacineProps>`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
  width: 100%;
  border-radius: 10px;
  min-height: 120px;
  margin-bottom: 10px;
  border-left: solid 14px ${props => props.statusCard};
`;

export const CardVacineWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  color: #000000;
  text-align: center;
`;
export const CardVacineContent = styled.div<CardVacineProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 10px;

  > h3 {
    margin: 0 10px;
  }

  > .circle {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border: solid 4px ${props => props.statusCard};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const CardUBSWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardUBS = styled.div<CardUBSProps>`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
  min-width: 240px;
  min-height: 120px;
  margin: 5px;
  border-left: solid 14px ${props => props.statusCard};
  border-radius: 10px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h4 {
    color: #000;
  }

  > .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      margin-left: 20px;
      margin-top: 5px;

      > span {
        color: #000;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
`