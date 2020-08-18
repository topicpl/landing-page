import React from "react"
import styled from "styled-components"
import Button from "./Button"

const Hero = () => {
  return (
    <Container>
      <Heading>
        The platform for people with <span>passion</span>.
      </Heading>
      <Text>
        Topic is a video chat linking people with the same passion. Our platform
        allows you to learn, talk on subjects you love, or even meet a soulmate
        that gets your interests.
      </Text>
      <Button />
    </Container>
  )
}

export default Hero

const Container = styled.main`
  width: 100%;
  margin-top: 120px;
  text-align: center;
`
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
`
