import React, { useState } from 'react';
import {Container, Logo, LogoContainer,  Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper} from './Navbar.elements';
import { FaBars, FaBookmark, FaHandHoldingUsd, FaPhoneAlt, FaSeedling, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Logoimage = require.context('../../assets/Img', true );

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value={{ style: { fontSize: "1.5em"}}}>
                <LogoContainer>
                    <Logo src={ Logoimage(`./LogoIcon.svg`)} />
                    <p>M</p>
                    <p>F</p>
                    <p></p>
                    <p>Gestor Privado y <br/> Mantenimiento</p>
                </LogoContainer>

                {/* Icon menu */}
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                
                {/* Menu */}
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <div>
                                <FaBookmark/>
                                Blog
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <div>
                                <FaSeedling/>
                                Nosotros
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <div>
                                <FaHandHoldingUsd/>
                                Cotizar
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <div>
                                <FaPhoneAlt/>
                            Contacto
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
  );
};

export default Navbar;