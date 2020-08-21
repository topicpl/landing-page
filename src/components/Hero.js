import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Gallery from "./Gallery"

const Hero = () => {
  return (
    <Container>
      <LeftSection>
        <Heading>
          The platform for people with <span>passion</span>.
        </Heading>
        <Text>
          Topic is a video chat linking people with the same passion. Our
          platform allows you to learn, talk on subjects you love, or even meet
          a soulmate that gets your interests.
        </Text>
        <Button />
      </LeftSection>
      <Gallery />
    </Container>
  )
}

export default Hero

const Container = styled.main`
  width: 100%;
  margin-top: 120px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.white};

  @media (min-width: 500px) {
    width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1366px) {
    text-align: left;
    margin: 200px 0 0 100px;
  }
`
const LeftSection = styled.section``
const Heading = styled.span`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  span {
    color: ${({ theme }) => theme.color.red[500]};
  }
`
const Text = styled.a`
  display: block;
  margin: 20px 0 50px 0;

  @media (min-width: 500px) {
    margin: 50px 0 80px 0;
  }
  @media (min-width: 1366px) {
    width: 350px;
  }
`
