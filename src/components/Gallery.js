import React from "react"
import styled from "styled-components"
import LS from "../assets/images/laptop-small.png"
import LM from "../assets/images/laptop-medium.png"
import LL from "../assets/images/laptop-large.png"

const Gallery = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default Gallery

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grey[950]};
  width: 100vw;
  margin: 0 0 150px -32px;
  padding-top: 70px;
  display: flex;
  justify-content: center;

  @media (min-width: 1366px) {
    background-color: ${({ theme }) => theme.color.white};
    width: 60%;
    padding: 0;
    margin: 0;
  }

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

    @media (min-width: 1600px) {
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
