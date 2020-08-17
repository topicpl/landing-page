import React from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <MenuIcon id="menu-btn" />
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;

  #menu-btn {
    font-size: 30px;
  }
`
