import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import Logo from "./Logo"
import Hamburger from "./Hamburger"

const Navbar = ({ refProp }) => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  return (
    <Container>
      <Logo isOpen={isMenuOpen} />
      {isMenuOpen ? (
        <CloseIcon id="close-btn" onClick={toggleMenu} />
      ) : (
        <MenuIcon id="menu-btn" onClick={toggleMenu} />
      )}
      <Hamburger
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        linkRef={refProp}
      />
    </Container>
  )
}

export default Navbar

const Container = styled.header`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 80px;
  padding: 0 32px 0 32px;
  position: fixed;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  #menu-btn,
  #close-btn {
    font-size: 28px;
    color: #141414;

    :hover {
      cursor: pointer;
    }

    /* @media (min-width: 800px) {
      display: none;
    } */
  }

  #close-btn {
    color: #fff;
  }
`
