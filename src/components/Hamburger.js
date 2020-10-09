import React from "react"
import styled from "styled-components"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const hamburgerLinks = [
  // Text should be in json files
  { text: ["Why Topic?", "Dlaczego Topic?"], href: "why-us" },
  { text: ["About", "O nas"], href: "why-us" },
  { text: ["FAQ", "FAQ"], href: "faq" },
]

const socialLinks = [
  { icon: TwitterIcon, href: "https://twitter.com/topicplatform" },
  { icon: FacebookIcon, href: "https://www.facebook.com/topicplatform" },
  { icon: InstagramIcon, href: "https://www.instagram.com/topicplatform/" },
]

const Hamburger = ({ isOpen, lang }) => {
  return (
    <Container isOpen={isOpen}>
      <HamburgerContainer>
        {hamburgerLinks.map(item => (
          <LinkContainer key={"link-hamburger__" + item.text[0]}>
            <a href={"/" + item.href} replace>
              <LinkElement>
                <span>{lang === "pl" ? item.text[1] : item.text[0]}</span>
              </LinkElement>
            </a>
          </LinkContainer>
        ))}
        <SocialContainer>
          {socialLinks.map(item => (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={"social-hamburger__" + item.href}
            >
              <item.icon />
            </a>
          ))}
        </SocialContainer>
      </HamburgerContainer>
    </Container>
  )
}

export default Hamburger

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 400px;
  z-index: -1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.grey[950]};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  color: ${({ isOpen }) => (isOpen ? "#fff" : "#141414")};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 1rem;
  transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -webkit-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -moz-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -ms-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -o-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  a {
    :hover {
      color: ${({ theme }) => theme.color.red[500]};
    }
  }
`
const HamburgerContainer = styled.div`
  width: calc(100% - 64px);
  height: calc(100% - 80px);
  margin: 0 32px 0 32px;
  margin-top: 80px;
  text-align: center;
`
const LinkContainer = styled.div`
  height: 23%;
  border-bottom: 1px solid #1b1b1b;
`
const LinkElement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SocialContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 500px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`
