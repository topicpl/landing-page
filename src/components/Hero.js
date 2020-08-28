import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Gallery from "./Gallery"

const Hero = ({ lang }) => {
  return (
    <Container>
      <section>
        <Heading>
          {lang === "pl"
            ? "Platforma dla ludzi z"
            : "The platform for people with"}{" "}
          <span>{lang === "pl" ? "pasją" : "passion"}</span>.
        </Heading>
        <Text>
          {lang === "pl"
            ? "Topic to wideo chat łączący ludzi z tą samą pasją. Nasza platforma pozwoli Ci się uczyć, rozmawiać na tematy, które kochasz, a nawet poznać drógą połówkę podzielającą twoje zainteresowania."
            : "Topic is a video chat linking people with the same passion. Our platform allows you to learn, talk on subjects you love, or even meet a soulmate that gets your interests."}
        </Text>
        <Button lang={lang} />
      </section>
      <div id="hero-gallery">
        <Gallery />
      </div>
    </Container>
  )
}

export default Hero

const Container = styled.main`
  width: 100%;
  margin-top: 120px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.white};

  #hero-gallery {
    margin-right: 150px;
    @media (max-width: 1365px) {
      display: none;
    }

    @media (min-width: 1600px) {
      margin-right: 0;
    }
  }

  @media (max-width: 500px) {
    padding: 0 32px;
  }

  @media (min-width: 500px) {
    width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1366px) {
    width: 100%;
    text-align: left;
    margin: 200px 0 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1921px) {
    width: 1800px;
    margin-left: auto;
    margin-right: auto;
  }
`
const Heading = styled.span`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  span {
    color: ${({ theme }) => theme.color.red[500]};
  }

  @media (min-width: 1366px) {
    display: block;
    width: 380px;
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
