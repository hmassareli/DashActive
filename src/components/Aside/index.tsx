import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

const Aside: React.FC = () => {
  return (
    <div>
      <Container>
        <Header>
          <LogImg src={logoImg} alt='Logo aplicação' />
          <Title>Minha Carteira</Title>
        </Header>
        <MenuContainer>
          <MenuItemLink href='/dashboard'>
            {' '}
            <MdDashboard />
            Dashboard
          </MenuItemLink>
          <MenuItemLink href='/dashboard/lists/entradas'>
            {' '}
            <MdArrowDownward />
            Entradas
          </MenuItemLink>
          <MenuItemLink href='/dashboard/lists/saidas'>
            <MdArrowUpward />
            Saídas
          </MenuItemLink>
          <MenuItemLink href='#'>
            <MdExitToApp />
            Sair
          </MenuItemLink>
        </MenuContainer>
      </Container>
    </div>
  );
};

export default Aside;
