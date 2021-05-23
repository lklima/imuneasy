import React from 'react';
import * as AiIcons from 'react-icons/ai';

import * as S from './styles';

const stocks = [
  {
    name: 'COVID-19',
    total: '15.000'
  },
  {
    name: 'TRÍPLICE VIRAL',
    total: '15.000'
  },
  {
    name: 'INFLUENZA',
    total: '15.000'
  },
  {
    name: 'ROTAVÍRUS',
    total: '15.000'
  },
  {
    name: 'FEBRE AMARELA',
    total: '15.000'
  },
  {
    name: 'POLIOMIELITE',
    total: '15.000'
  },
]

export const Stocks: React.FC = () => {
  return (
    <S.Container>
      <S.Input>
        <span>Nome da Vacina</span>
        <input type="text" placeholder="Nome" />
      </S.Input>
      <S.Input>
        <span>Quantidade</span>
        <input type="number" placeholder="Informe a quantidade" />
      </S.Input>
      <S.Button>Adicionar</S.Button>
      <S.TitleTable>VACINAS CADASTRADAS</S.TitleTable>
      <S.TableWrapper>
        {
          stocks && stocks.map((stocks_item) => (
            <S.TableItem>
              <span>{stocks_item.name}</span>
              <S.TableItemContent>
                <div className="info">
                  <span className="label">Total em Estoque</span>
                  <span className="value">{stocks_item.total}</span>
                </div>
                <S.TableItemButtonWrapper>
                  <S.TableItemButton color="#9DE686">
                    <AiIcons.AiOutlineHistory size={15} />
                    Histórico
                  </S.TableItemButton>
                  <S.TableItemButton color="#ACB9FF">
                    <AiIcons.AiOutlineArrowsAlt size={15} />
                    Movimentar
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
