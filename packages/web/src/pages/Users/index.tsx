import React from 'react';
import * as AiIcons from 'react-icons/ai';

import * as S from './styles';

const users = [
  {
    name: 'Hugo Marinho Silva',
    capacity: 'Central de Imunização',
    function: 'Diretor de Imunização'
  },
  {
    name: 'Hugo Marinho Silva',
    capacity: 'Central de Imunização',
    function: 'Diretor de Imunização'
  },
  {
    name: 'Hugo Marinho Silva',
    capacity: 'Central de Imunização',
    function: 'Diretor de Imunização'
  },
  {
    name: 'Hugo Marinho Silva',
    capacity: 'Central de Imunização',
    function: 'Diretor de Imunização'
  },
  {
    name: 'Hugo Marinho Silva',
    capacity: 'Central de Imunização',
    function: 'Diretor de Imunização'
  },
  {
    name: 'Hugo Marinho Silva',
    capacity: 'Central de Imunização',
    function: 'Diretor de Imunização'
  },
]

export const Users: React.FC = () => {
  return (
    <S.Container>
      <S.Input>
        <span>Nome da Usuário</span>
        <input type="text" placeholder="Nome" />
      </S.Input>
      <S.Input>
        <span>Função</span>
        <input type="text" placeholder="Digite o Cargo" />
      </S.Input>
      <S.Input>
        <span>Lotação</span>
        <input type="text" placeholder="Digite a Unidade de Lotação" />
      </S.Input>
      <S.Button>Salvar</S.Button>
      <S.TitleTable>USUÁRIOS CADASTRADOS</S.TitleTable>
      <S.TableWrapper>
        {
          users && users.map((users_item) => (
            <S.TableItem>
              <span>{users_item.name}</span>
              <S.TableItemContent>
                <div className="info">
                  <span className="label">Função</span>
                  <span className="value">{users_item.function}</span>
                </div>
                <div className="info">
                  <span className="label">Lotação</span>
                  <span className="value">{users_item.capacity}</span>
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
