import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import Logo from "./Logo"
import Hamburger from "./Hamburger"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Link } from "gatsby"

const Navbar = ({ refProp }) => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  const sitesLinks = [
    { text: "Why Topic?", href: "why-us" },
    { text: "About", href: "about" },
    { text: "FAQ", href: "faq" },
  ]

  const socialLinks = [
    { icon: TwitterIcon, href: "https://twitter.com/topicplatform" },
    { icon: FacebookIcon, href: "https://www.facebook.com/topicplatform" },
    { icon: InstagramIcon, href: "https://www.instagram.com/topicplatform/" },
  ]

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
      <DesktopHeaderContainer>
        <SitesContainer>
          {sitesLinks.map(item => (
            <Link to={item.href} key={"sites-desktop__" + item.href}>
              <span>{item.text}</span>
            </Link>
          ))}
        </SitesContainer>
        <SocialContainer>
          {socialLinks.map(item => (
            <Link to={item.href} key={"social-desktop__" + item.href}>
              <item.icon />
            </Link>
          ))}
        </SocialContainer>
      </DesktopHeaderContainer>
    </Container>
  )
}

export default Navbar

const Container = styled.header`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 60px;
  padding: 0 32px;
  position: fixed;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};

  /* -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25); */

  #menu-btn,
  #close-btn {
    font-size: 28px;
    color: #141414;

    :hover {
      cursor: pointer;
    }

    @media (min-width: 1366px) {
      display: none;
    }
  }

  #close-btn {
    color: #fff;
  }

  @media (min-width: 1366px) {
    padding: 0 100px;
    height: 100px;
  }
`
const DesktopHeaderContainer = styled.div`
  display: none;

  @media (min-width: 1366px) {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
`
const SitesContainer = styled.div`
  margin-left: 140px;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SocialContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
