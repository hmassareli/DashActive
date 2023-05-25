import React from 'react';
import { Container, Profile, UserName } from './styles';
import Toggle from '../Toggle'

const MainHeader: React.FC = () => {
    return (
        <div>
            <Container>
            <Toggle />
            <Profile>
                <p>Olá,</p>
                <UserName>Arthur Benfica </UserName>
            </Profile>
            </Container>
        </div>
    );
};
export default MainHeader;
