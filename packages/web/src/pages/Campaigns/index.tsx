import React from 'react';
import { useState } from 'react';
import * as AiIcons from 'react-icons/ai';


import * as S from './styles';

const campaigns = [
  {
    name: 'COVID-19',
    objective: '15.000',
    time_course: '01/05/2021 a 31/05/2021',
    reached: '13.725'
  },
  {
    name: 'COVID-19',
    objective: '15.000',
    time_course: '01/05/2021 a 31/05/2021',
    reached: '13.725'
  },
  {
    name: 'COVID-19',
    objective: '15.000',
    time_course: '01/05/2021 a 31/05/2021',
    reached: '13.725'
  },
  {
    name: 'COVID-19',
    objective: '15.000',
    time_course: '01/05/2021 a 31/05/2021',
    reached: '13.725'
  },
  {
    name: 'COVID-19',
    objective: '15.000',
    time_course: '01/05/2021 a 31/05/2021',
    reached: '13.725'
  }
]

export const Campaigns: React.FC = () => {
  const [campaign, setCampaign] = useState({
    name: '',
    objective: 0,
  });
  return (
    <S.Container>
      <S.Input>
        <span>Nome da Campanha</span>
        <input type="text" placeholder="Nome" />
      </S.Input>
      <S.Input>
        <span>Objetivo de Vacinação (Em número de Pessoas)</span>
        <input type="number" placeholder="Quantidade" />
      </S.Input>
      <S.Input>
        <span>Período</span>
        <div>
          <input type="date" placeholder="Ínicio" />
          <input type="date" placeholder="Fim" />
        </div>
      </S.Input>
      <S.Button>Salvar</S.Button>
      <S.TitleTable>CAMPANHAS CADASTRADAS</S.TitleTable>
      <S.TableWrapper>
        {
          campaigns && campaigns.map((campaigns_item) => (
            <S.TableItem>
              <span>{campaigns_item.name}</span>
              <S.TableItemContent>
                <div className="info">
                  <span className="label">Objetivo</span>
                  <span className="value">{campaigns_item.objective}</span>
                </div>
                <div className="info">
                  <span className="label">Período</span>
                  <span className="value">{campaigns_item.time_course}</span>
                </div>
                <div className="info">
                  <span className="label">Alcançado</span>
                  <span className="value">{campaigns_item.reached}</span>
                </div>
                <S.TableItemButtonWrapper>
                  <S.TableItemButton color="#37C9D3">
                    <AiIcons.AiOutlineEdit size={15} />
                    Editar
                  </S.TableItemButton>
                  <S.TableItemButton color="#FF0000">
                    <AiIcons.AiOutlineDelete size={15} />
                    Excluir
                  </S.TableItemButton>
                </S.TableItemButtonWrapper>
              </S.TableItemContent>
            </S.TableItem>
          ))
        }
      </S.TableWrapper>
    </S.Container>
  );
}
