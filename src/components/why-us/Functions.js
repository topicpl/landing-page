import React from "react"
import styled from "styled-components"
import group from "../../assets/icons/group.png"
import categories from "../../assets/icons/categories.png"
import chat from "../../assets/icons/chat.png"
import link from "../../assets/icons/link.png"
import noreg from "../../assets/icons/noreg.png"
import premium from "../../assets/icons/premium.png"
import voting from "../../assets/icons/voting.png"
import reput from "../../assets/icons/reput.png"

const plList = [
  { icon: group, text: "Pokoje 1-6 osób." },
  {
    icon: categories,
    text: "Podział użytkowników na kategorie zainteresowań.",
  },
  { icon: chat, text: "Czat tekstowy." },
  { icon: link, text: "Zapraszanie znajomych do pokoju przy użyciu linku." },
  { icon: noreg, text: "Możliwość korzystania bez rejestracji." },
  { icon: premium, text: "Konto premium." },
  { icon: voting, text: "Demokratyczny system kickowania." },
  { icon: reput, text: "System reputacji." },
]

const enList = [
  { icon: group, text: "Lobbies with 1-6 participants." },
  { icon: categories, text: "Dividing users by their interests." },
  { icon: chat, text: "Text chat." },
  { icon: link, text: "Inviting friends to lobby by sharing a link." },
  { icon: noreg, text: "Possibility of use with no sign up." },
  { icon: premium, text: "Premium account." },
  { icon: voting, text: "Democratic kicking system." },
  { icon: reput, text: "Reputation system." },
]

const Functions = ({ lang }) => {
  return (
    <StyledFuntions>
      {lang === "pl" ? (
        <FunctionsContainer>
          <FunctionsHeader>Nasze główne funkcje.</FunctionsHeader>
          {plList.map(item => (
            <FunctionsElement key={"func-pl__" + item.icon}>
              <FunctionsIcon src={item.icon}></FunctionsIcon>
              <FunctionsText>{item.text}</FunctionsText>
            </FunctionsElement>
          ))}
        </FunctionsContainer>
      ) : (
        <FunctionsContainer>
          <FunctionsHeader>Our main functions.</FunctionsHeader>
          {enList.map(item => (
            <FunctionsElement key={"func-en__" + item.icon}>
              <FunctionsIcon src={item.icon}></FunctionsIcon>
              <FunctionsText>{item.text}</FunctionsText>
            </FunctionsElement>
          ))}
        </FunctionsContainer>
      )}
    </StyledFuntions>
  )
}

export default Functions

const StyledFuntions = styled.section`
  width: 100%;
`
const FunctionsContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 430px;
  }
`
const FunctionsHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 50px;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
`
const FunctionsElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`
const FunctionsIcon = styled.img`
  width: 45px;
  margin-right: 30px;
`
const FunctionsText = styled.div`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 400;
`
