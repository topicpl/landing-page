import React from "react"
import styled from "styled-components"
import LogoIcon from "../assets/logos/64mainsq.png"
import Gallery from "./Gallery"

const Footer = ({ lang }) => {
  const footerList = [
    { text: ["Help & Support", "Pomoc & Support"], href: "help" },
    { text: ["Feedback", "Opinia zwrotna"], href: "feedback" },
    { text: ["Terms", "Warunki korzystania"], href: "terms" },
    { text: ["Privacy", "Polityka prywatności"], href: "privacy" },
  ]

  return (
    <Container>
      <div id="footer-gallery">
        <Gallery />
      </div>
      <FooterContainer>
        <Icon src={LogoIcon} alt="Topic logo"></Icon>
        <TextContainer>
          <b>{lang === "pl" ? "Produkt" : "Product"}</b>
          <Text>
            <a href="faq">
              <span>Android App</span>
            </a>
          </Text>
          <Text>
            <a href="faq">
              <span>iOS App</span>
            </a>
          </Text>
        </TextContainer>
        <TextContainer>
          <b>{lang === "pl" ? "Zasoby" : "Resources"}</b>
          {footerList.map(item => (
            <Text>
              <a href={item.href}>
                <span>{lang === "pl" ? item.text[1] : item.text[0]}</span>
              </a>
            </Text>
          ))}
        </TextContainer>
      </FooterContainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grey[950]};
  width: 100vw;
  margin-top: 120px;
  padding: 70px 32px 100px 32px;

  @media (min-width: 1366px) {
    margin-left: 0;

    #footer-gallery {
      display: none;
    }
  }
`
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.white};
  max-width: 500px;
  margin: 0 auto;
  margin-top: 150px;

  b {
    margin-bottom: 20px;
  }

  @media (max-width: 300px) {
    width: 100vw;
    margin-left: -32px;
  }
  @media (min-width: 1366px) {
    max-width: 700px;
  }
`
const Text = styled.span`
  margin-bottom: 12px;
  transition: color 0.5s 0s;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.red[500]};
  }
`
const Icon = styled.img`
  border-radius: 5px;
  width: 32px;
  height: 32px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
