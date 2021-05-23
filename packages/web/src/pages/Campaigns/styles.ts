import styled from 'styled-components';


interface TableItemButtonProps {
  color?: string;
}

export const Container = styled.div``;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: #000000;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  > input {
    padding: 12px;
    max-width: 610px;
    border-radius: 6px;
    border: solid 1px #AAAAAA;
  }

  > div input {
    padding: 12px;
    margin-right: 10px;
    min-width: 300px;
    border-radius: 6px;
    border: solid 1px #AAAAAA;
  }
`;

export const Button = styled.button`
  background-color: #37C9D3;
  max-width: 610px;
  color: #FFF;
  border-radius: 6px;
  margin-top: 20px;
  width: 100%;
  padding: 12px;
`;

export const TitleTable = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-top: 30px;
`;
export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const TableItem = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  background-color: #FFF;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  border-left: solid 14px #24CCD9;

  > span {
    color: #000;
    min-width: 120px;
    font-weight: bold;
  }
`;
export const TableItemContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  > div.info {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    
    > .label{
      color: #979797;
      font-size: 12px;
    }
    
    > .value{
      color: #000;
      font-size: 14px;
    }
  }
`;

export const TableItemButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableItemButton = styled.button<TableItemButtonProps>`
  background-color: ${props => props.color};
  border-radius: 6px;
  color: #FFF;
  margin-right: 10px;
  min-width: 80px;
  padding: 5px;
`;
