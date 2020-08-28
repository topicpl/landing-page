import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Helmet from "../../components/Helmet"
import detectBrowserLanguage from "detect-browser-language"
import MasterStyle from "../../assets/styles/MasterStyle.js"
import Navbar from "../../components/Navbar"

const Page404 = () => {
  const [lang, setLang] = useState("pl")

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    if (detectedLang.includes("pl")) setLang("pl")
    else setLang("en")
  }, [lang])

  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={lang} />
      <Container>
        <Top>404</Top>
        <Bottom>ERROR</Bottom>
      </Container>
    </MasterStyle>
  )
}

export default Page404

const Container = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.black};
  height: calc(100vh - 200px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Top = styled.div`
  font-size: 10vw;
`
const Bottom = styled.div`
  font-size: 5vw;
`
