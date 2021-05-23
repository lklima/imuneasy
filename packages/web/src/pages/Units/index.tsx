import React from 'react';
import * as AiIcons from 'react-icons/ai';

import * as S from './styles';

const units = [
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
  {
    name: 'Palmeiras do Norte',
    address: 'Rua das Camélias S/N, Araguaína/TO'
  },
]

export const Units: React.FC = () => {
  return (
    <S.Container>
      <S.Input>
        <span>Nome da Unidade</span>
        <input type="text" placeholder="Nome" />
      </S.Input>
      <S.Input>
        <span>Endereço</span>
        <input type="text" placeholder="Exemplo: Avenida 01, Qd 50 Lt 20, Residencial Patrocinio" />
      </S.Input>
      <S.Button>Salvar</S.Button>
      <S.TitleTable>UNIDADES CADASTRADAS</S.TitleTable>
      <S.TableWrapper>
        {
          units && units.map((units_item) => (
            <S.TableItem>
              <span>{units_item.name}</span>
              <S.TableItemContent>
                <div className="info">
                  <span className="label">Endereço</span>
                  <span className="value">{units_item.address}</span>
                </div>
                <S.TableItemButtonWrapper>
                  <S.TableItemButton color="#9DE686">
                    <AiIcons.AiOutlineHistory size={15} />
                    Histórico
                  </S.TableItemButton>
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
