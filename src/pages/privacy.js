import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import detectBrowserLanguage from "detect-browser-language"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import plPP from "../assets/txts/plPP"
import enPP from "../assets/txts/enPP"

const Privacy = () => {
  const [lang, setLang] = useState("pl")
  const [ppFile, setLangPP] = useState(plPP)

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    if (detectedLang.includes("pl")) {
      setLang("pl")
      setLangPP(plPP)
    } else {
      setLang("en")
      setLangPP(enPP)
    }
  }, [lang, ppFile])

  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={lang} />
      <Container>
        {ppFile.map(item => (
          <>
            <Header>{item.header1}</Header>
            <b>{item.text1}</b>
            <Text>{item.text2}</Text>
          </>
        ))}
      </Container>
      <Footer lang={lang} />
    </MasterStyle>
  )
}

export default Privacy

const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 150px;
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    width: 400px;
  }

  @media (min-width: 800px) {
    width: 700px;
  }
`
const Header = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
`
const Text = styled.p`
  margin: 0;
`
