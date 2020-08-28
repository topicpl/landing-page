import React from "react"
import styled from "styled-components"
import avatarCA from "../../assets/images/avatarCA.jpg"

const quotesData = [
  {
    avatar: avatarCA,
    text:
      "Przyznam, że podoba mi się pomysł platformy, która może pomóc ludziom poznawać i od razu rozmawiać z ludźmi, z którymi dzielą zainteresowania. Niestety żyjemy w czasach coraz większego spłycania kontaktów międzyludzkich, a szczytowym osiągnięciem do poznawania nowych ludzi jest ich 1-sekundowe ocenianie na podstawie zdjęcia (To też nie tak, że potępiam, wszystko ma swoje miejsce). Tym bardziej jednak warto żeby powstawały rozwiązania dążące do czegoś więcej...",
    author: "Człowiek Absurdalny",
    link: "https://www.youtube.com/channel/UC-u36cIdIklImAj7f6mfmEQ",
  },
]

const Quotes = ({ lang }) => {
  return (
    <StyledQuotes>
      <QuotesHeader>
        {lang === "pl" ? "Co inni o nas myślą?" : "What others think about us?"}
      </QuotesHeader>
      {quotesData.map(item => (
        <QuotesContainer key={"quotes__" + item.avatar}>
          <QuotesAvatar src={item.avatar}></QuotesAvatar>
          <QuotesText>{item.text}</QuotesText>
          <QuotesAuthor target="_blank" href={item.link}>
            ~ {item.author}
          </QuotesAuthor>
        </QuotesContainer>
      ))}
    </StyledQuotes>
  )
}

export default Quotes

const StyledQuotes = styled.section`
  width: 100%;
`
const QuotesHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 50px;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
`
const QuotesContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 900px) {
    width: 80%;
  }

  @media (min-width: 1300px) {
    width: 700px;
  }
`
const QuotesAvatar = styled.img`
  width: 50px;
  border-radius: 100%;
  float: left;
  padding: 20px 0;
`
const QuotesText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  line-height: 130%;
  margin-left: 100px;
`
const QuotesAuthor = styled.a`
  font-size: 1.1rem;
  font-weight: 400;
  color: #f44336;
  font-style: italic;
  text-align: right;
  float: right;
  margin-top: 30px;
`
