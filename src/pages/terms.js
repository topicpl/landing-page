import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import detectBrowserLanguage from "detect-browser-language"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import enTerms from "../assets/txts/enTerms"
import plTerms from "../assets/txts/plTerms"

const Terms = () => {
  const [lang, setLang] = useState("pl")
  const [termsFile, setTermsFile] = useState(plTerms)

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    if (detectedLang.includes("pl")) {
      setLang("pl")
      setTermsFile(plTerms)
    } else {
      setLang("en")
      setTermsFile(enTerms)
    }
  }, [lang, termsFile])

  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={lang} />
      <Container>
        {lang === "pl" ? (
          <>
            <h1>Regulamin</h1>
            <p>
              Topic jest nową formą mediów społecznościowych. Stawiamy na
              najwyższą jakość dostarczanych przez nas usług. Wideo rozmowy
              nigdy wcześniej nie były tak bardzo pasjonujące! Prosimy o
              zachowanie zasad regulaminu, przestrzeganie kultury na czacie oraz
              podchodzenie do siebie z wzajemnym szacunkiem. Nie stosowanie się
              do poniższych zasad skutkuje blokadą dostępu do naszego serwisu.{" "}
            </p>
          </>
        ) : (
          <>
            <h1>Regulations</h1>
            <p>
              Topic is a new form of social media. We focus on the highest
              quality of our services. Video calls have never been so exciting!
              We ask you to follow the rules of the regulations, to follow the
              culture of the chat and to approach each other with mutual
              respect. Failure to follow these rules will result in blocking
              access to our service.
            </p>
          </>
        )}
        {termsFile.map((item, index) => (
          <>
            <Header>{item.text1}</Header>
            <ul>
              {item.text2.map(listItem => (
                <li>{listItem}</li>
              ))}
            </ul>
          </>
        ))}
      </Container>
      <Footer lang={lang} />
    </MasterStyle>
  )
}

export default Terms

const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    width: 400px;
  }

  @media (min-width: 800px) {
    width: 700px;
  }
  h1 {
    text-align: center;
  }

  ul {
    text-decoration: none;
  }
`
const Header = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 100px;
`
