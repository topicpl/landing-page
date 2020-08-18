import React from "react"
import styled from "styled-components"
import LS from "../assets/images/laptop-small.png"
import LogoIcon from "../assets/logos/64mainsq.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={LS} />
      </ImgContainer>
      <FooterContainer>
        <Icon src={LogoIcon}></Icon>
        <TextContainer>
          <b>Product</b>
          <Text>
            <Link to="faq">
              <span>Android App</span>
            </Link>
          </Text>
          <Text>
            <Link to="faq">
              <span>iOS App</span>
            </Link>
          </Text>
        </TextContainer>
        <TextContainer>
          <b>Resources</b>
          <Text>
            <Link to="help">
              <span>Help & Support</span>
            </Link>
          </Text>
          <Text>
            <Link to="feedback">
              <span>Feedback</span>
            </Link>
          </Text>
          <Text>
            <Link to="terms">
              <span>Terms</span>
            </Link>
          </Text>
          <Text>
            <Link to="privacy">
              <span>Privacy</span>
            </Link>
          </Text>
        </TextContainer>
      </FooterContainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grey[950]};
  width: 100vw;
  margin: 120px 0 0 -32px;
  padding: 70px 32px 100px 32px;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`
const FooterContainer = styled.footer`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.white};

  b {
    margin-bottom: 20px;
  }
`
const Text = styled.span`
  margin-bottom: 12px;

  :hover {
    cursor: pointer;
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
