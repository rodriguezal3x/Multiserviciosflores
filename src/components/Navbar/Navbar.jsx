import React from 'react';
import {Container, Logo, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper} from './Navbar.elements'

const Logoimage = require.context('../../assets/Img', true );

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <LogoContainer>
                <Logo src={ Logoimage(`./LogoIcon.png`)} />
                <p>Multiservicio</p>
                <p>Flores</p>
            </LogoContainer>
            <Menu>
                <MenuItem>
                    <MenuItemLink>Blog</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>Nosotros</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>Cotizar</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>Contacto</MenuItemLink>
                </MenuItem>
            </Menu>
        </Wrapper>
    </Container>
  );
};

export default Navbar;