import React from "react"
import styled from "styled-components"

const Content = ({ lang }) => {
  return (
    <StyledContent>
      {lang === "pl" ? (
        <Hero>
          <HeroHeading>Czym jest Topic?</HeroHeading>
          <HeroInner>
            <HeroText>
              Topic to wideo czat łączący ze sobą osoby o wspólnych pasjach.
              Nasza platforma scala ze sobą komunikator z kategoriami - tworząc
              lepsze zastosowanie, pozwalające Ci na naukę, rozmowę na tematy,
              które kochasz czy nawet poznanie miłości, która rozumie twoje
              zainteresowania.
            </HeroText>
            <HeroText>
              Jeśli chcesz się dowiedzieć
              <a href="faq"> więcej o projekcie</a> stworzyliśmy
              <a
                href="https://www.behance.net/gallery/95608867/Topic-app-mockup"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                mockup
              </a>{" "}
              który pokazuje kilka ciekawych funkcji. Jeśli podoba Ci się nasz
              pomysł i chcesz nam pomóc się rozwijać, sprawdź naszego{" "}
              <a
                href="https://www.facebook.com/topicplatform/"
                target="_blank"
                rel="noreferrer"
              >
                facebooka
              </a>{" "}
              i{" "}
              <a
                href="https://twitter.com/topicplatform"
                target="_blank"
                rel="noreferrer"
              >
                twittera
              </a>{" "}
              oraz zostaw like i udostępnij innym!
            </HeroText>
          </HeroInner>
        </Hero>
      ) : (
        <Hero>
          <HeroHeading>What's Topic?</HeroHeading>
          <HeroInner>
            <HeroText>
              Topic is a video chat linking people with the same passion. Our
              platform merges communicators with categories - creating better
              use, allowing you to learn, talk on subjects you love or even meet
              a soulmate that gets your interests.
            </HeroText>
            <HeroText>
              If you want to know <a href="faq">more about the project</a> we
              made a{" "}
              <a
                href="https://www.behance.net/gallery/95608867/Topic-app-mockup"
                target="_blank"
                rel="noreferrer"
              >
                mockup
              </a>{" "}
              that shows some of our features. If you like our idea and want us
              to succeed as we do, check out our{" "}
              <a
                href="https://www.facebook.com/topicplatform/"
                target="_blank"
                rel="noreferrer"
              >
                facebook
              </a>{" "}
              and{" "}
              <a
                href="https://twitter.com/topicplatform"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>{" "}
              page, leave a follow and share!
            </HeroText>
          </HeroInner>
        </Hero>
      )}
    </StyledContent>
  )
}

export default Content

const StyledContent = styled.section`
  width: 100vw;
  font-weight: 300;
`
const Hero = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 90%;
`
const HeroHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 50px;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
`
const HeroInner = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media (min-width: 1400px) {
    width: 1000px;
  }
`
const HeroText = styled.p`
  text-align: left;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 50px 0;

  i {
    color: #f44336;
  }
  a {
    color: #f44336;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 700px) {
    width: 45%;
    text-align: left;
    margin: 0;
  }

  @media (min-width: 900px) {
    width: 300px;
  }
`
