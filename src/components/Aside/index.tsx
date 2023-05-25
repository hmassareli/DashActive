import React from 'react';
import { MdArrowDownward, MdArrowUpward, MdDashboard, MdExitToApp } from 'react-icons/md';
import logoImg from '../../assets/logo.svg';
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles';

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
          <MenuItemLink href='/lists/entradas'>
            {' '}
            <MdArrowDownward />
            Entradas
          </MenuItemLink>
          <MenuItemLink href='/lists/saidas'>
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
