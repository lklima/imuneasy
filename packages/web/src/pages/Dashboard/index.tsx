import React from 'react';
import * as GiIcons from 'react-icons/gi';

import * as S from './styles';

import VacineIcon from '../../assets/img/tabler_vaccinevacine.svg'

export interface IVacine {
  name: string;
  stock: number;
  entrance: number;
  exit: number;
  minimum: number;
}

export interface IUBS {
  id: number;
  name: string;
  temperature: number;
  humidity: number;
}

const vacines: IVacine[] = [
  {
    name: 'COVID-19',
    stock: 100,
    entrance: 10000,
    exit: 6500,
    minimum: 200
  },
  {
    name: 'TRÍPLICE VIRAL',
    stock: 3500,
    entrance: 10000,
    exit: 6500,
    minimum: 200
  },
  {
    name: 'INFLUENZA',
    stock: 3500,
    entrance: 10000,
    exit: 6500,
    minimum: 200
  },
  {
    name: 'ROTAVÍRUS',
    stock: 3500,
    entrance: 10000,
    exit: 6500,
    minimum: 200
  },
  {
    name: 'FEBRE AMARELA',
    stock: 3500,
    entrance: 10000,
    exit: 6500,
    minimum: 200
  },
  {
    name: 'POLIOMIELITE',
    stock: 3500,
    entrance: 10000,
    exit: 6500,
    minimum: 200
  }
]

const ubslist: IUBS[] = [
  {
    id: 1,
    name: 'UBS MARIA DOS REIS',
    temperature: 4,
    humidity: 31
  },
  {
    id: 2,
    name: 'UBS JOSE DE SOUSA REZENDE',
    temperature: 4,
    humidity: 31
  },
  {
    id: 3,
    name: 'UBS ALBENY SOARES',
    temperature: 4,
    humidity: 31
  },
  {
    id: 4,
    name: 'UBS SENADOR BENEDITO',
    temperature: 4,
    humidity: 31
  }
]

export const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <S.PanelContainer>
        <S.VacineTable>
          <tr>
            <S.VacineHeaderTable>Nome</S.VacineHeaderTable>
            <S.VacineHeaderTable>Estoque</S.VacineHeaderTable>
            <S.VacineHeaderTable>Entrada</S.VacineHeaderTable>
            <S.VacineHeaderTable>Saída</S.VacineHeaderTable>
            <S.VacineHeaderTable>Mínimo</S.VacineHeaderTable>
          </tr>
          {
            vacines && vacines.map((vacine: IVacine) => (
              <S.VacineItemTableTr isMinimum={vacine.minimum > vacine.stock} >
                <S.VacineItemTable isBold>{vacine.name}</S.VacineItemTable>
                <S.VacineItemTable isBorder>{vacine.stock}</S.VacineItemTable>
                <S.VacineItemTable isBorder>{vacine.entrance}</S.VacineItemTable>
                <S.VacineItemTable isBorder>{vacine.exit}</S.VacineItemTable>
                <S.VacineItemTable>{vacine.minimum}</S.VacineItemTable>
              </S.VacineItemTableTr>
            ))
          }
        </S.VacineTable>
        <S.CardContainer>
          <S.CardVacine statusCard={S.StatusCard.SUCCESS}>
            <S.CardVacineWrapper>
              <h3>CAMPANHA COVID-19</h3>
            </S.CardVacineWrapper>
            <S.CardVacineContent statusCard={S.StatusCard.SUCCESS}>
              <img src={VacineIcon} alt="Ícone em formato de Seringa" />
              <h3>COBERTURA VACINAL</h3>
              <div className="circle">
                95%
              </div>
            </S.CardVacineContent>
          </S.CardVacine>
          <S.CardVacine statusCard={S.StatusCard.WARNING}>
            <S.CardVacineWrapper>
              <h3>CAMPANHA TRÍPLICE VIRAL</h3>
            </S.CardVacineWrapper>
            <S.CardVacineContent statusCard={S.StatusCard.WARNING}>
              <img src={VacineIcon} alt="Ícone em formato de Seringa" />
              <h3>COBERTURA VACINAL</h3>
              <div className="circle">
                32%
              </div>
            </S.CardVacineContent>
          </S.CardVacine>
          <S.CardVacine statusCard={S.StatusCard.ERROR}>
            <S.CardVacineWrapper>
              <h3>CAMPANHA INFLUENZA</h3>
            </S.CardVacineWrapper>
            <S.CardVacineContent statusCard={S.StatusCard.ERROR}>
              <img src={VacineIcon} alt="Ícone em formato de Seringa" />
              <h3>COBERTURA VACINAL</h3>
              <div className="circle">
                5%
              </div>
            </S.CardVacineContent>
          </S.CardVacine>
        </S.CardContainer>
      </S.PanelContainer>
      <S.CardUBSWrapper>
        {
          ubslist && ubslist.map((ubs: IUBS) => (
            <S.CardUBS statusCard={S.StatusCard.WARNING} key={ubs.id}>
              <h4>{ubs.name}</h4>
            </S.CardUBS>
          ))
        }
      </S.CardUBSWrapper>
    </S.Container>
  );
}
