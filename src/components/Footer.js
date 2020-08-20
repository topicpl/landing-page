import React from "react"
import styled from "styled-components"
import LS from "../assets/images/laptop-small.png"
import LM from "../assets/images/laptop-medium.png"
import LL from "../assets/images/laptop-large.png"
import LogoIcon from "../assets/logos/64mainsq.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Container>
      <ImgContainer>
        <img
          src={LS}
          alt="Mockup showing laptop with three people using the app."
          class="footer-img__small"
        />
        <img
          src={LM}
          alt="Mockup showing laptop with three people using the app."
          class="footer-img__medium"
        />
        <img
          src={LL}
          alt="Mockup showing laptop with three people using the app."
          class="footer-img__large"
        />
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

  .footer-img {
    &__small {
      display: inline;
    }
    &__medium {
      display: none;
    }
    &__large {
      display: none;
    }
    @media (min-width: 600px) {
      &__small {
        display: none;
      }
      &__medium {
        display: inline;
      }
      &__large {
        display: none;
      }
    }
    @media (min-width: 1500px) {
      &__small {
        display: none;
      }
      &__medium {
        display: none;
      }
      &__large {
        display: inline;
      }
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
