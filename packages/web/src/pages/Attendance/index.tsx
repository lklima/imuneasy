import React from 'react';
import { useState } from 'react';

import * as S from './styles';

const attendances = [
  {
    name: 'Hugo Marinho Silva',
    vacine: 'COVID-19',
    date: '22/05/2021',
    hour: '11:00 AM',
    nurse: 'Enf. Fulano de Tal'
  },
  {
    name: 'Lucas Silva',
    vacine: 'COVID-19',
    date: '22/05/2021',
    hour: '11:00 AM',
    nurse: 'Enf. Fulano de Tal'
  },
  {
    name: 'Danilo Machado de Sousa',
    vacine: 'COVID-19',
    date: '22/05/2021',
    hour: '11:00 AM',
    nurse: 'Enf. Fulano de Tal'
  },
  {
    name: 'Hugo Marinho Silva',
    vacine: 'COVID-19',
    date: '22/05/2021',
    hour: '11:00 AM',
    nurse: 'Enf. Fulano de Tal'
  },
  {
    name: 'Hugo Marinho Silva',
    vacine: 'COVID-19',
    date: '22/05/2021',
    hour: '11:00 AM',
    nurse: 'Enf. Fulano de Tal'
  },
]

export const Attendance: React.FC = () => {
  return (
    <S.Container>
      <S.Input>
        <span>Nome do Paciente</span>
        <input type="text" placeholder="Nome Completo" />
      </S.Input>
      <S.Input>
        <span>CNS (Cartão Nacional do SUS)</span>
        <input type="text" placeholder="Informe o CNS" />
      </S.Input>
      <S.Input>
        <span>Tipo de Vacina</span>
        <input type="text" placeholder="Selecione a Vacina Utilizada" />
      </S.Input>
      <S.Button>Salvar</S.Button>
      <S.TitleTable>HISTÓRICO</S.TitleTable>
      <S.TableWrapper>
        {
          attendances && attendances.map((attendances_item) => (
            <S.TableItem>
              <span>{attendances_item.name}</span>
              <S.TableItemContent>
                <div className="info">
                  <span className="label">Vacina</span>
                  <span className="value">{attendances_item.vacine}</span>
                </div>
                <div className="info">
                  <span className="label">Data</span>
                  <span className="value">{attendances_item.date}</span>
                </div>
                <div className="info">
                  <span className="label">Hora</span>
                  <span className="value">{attendances_item.hour}</span>
                </div>
                <div className="info">
                  <span className="label">Atendente</span>
                  <span className="value">{attendances_item.nurse}</span>
                </div>
              </S.TableItemContent>
            </S.TableItem>
          ))
        }
      </S.TableWrapper>
    </S.Container>
  );
}
