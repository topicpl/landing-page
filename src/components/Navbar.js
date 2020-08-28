import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import Logo from "./Logo"
import Hamburger from "./Hamburger"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const Navbar = ({ refProp, lang }) => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  const sitesLinks = [
    { text: ["Why Topic?", "Dlaczego Topic?"], href: "why-us" },
    { text: ["About", "O nas"], href: "why-us" },
    { text: ["FAQ", "FAQ"], href: "faq" },
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
        lang={lang}
        toggleMenu={toggleMenu}
        linkRef={refProp}
      />
      <DesktopHeaderContainer>
        <SitesContainer>
          {sitesLinks.map(item => (
            <a href={item.href} key={"sites-desktop__" + item.text[0]}>
              <span>{lang === "pl" ? item.text[1] : item.text[0]}</span>
            </a>
          ))}
        </SitesContainer>
        <SocialContainer>
          {socialLinks.map(item => (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={"social-desktop__" + item.href}
            >
              <item.icon />
            </a>
          ))}
        </SocialContainer>
      </DesktopHeaderContainer>
    </Container>
  )
}

export default Navbar

const Container = styled.nav`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 60px;
  padding: 0 32px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.9);

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

  a {
    transition: color 0.2s 0s;
    :hover {
      color: ${({ theme }) => theme.color.red[500]};
    }
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
