import React, { useState, useEffect } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import enTerms from "../assets/txts/enTerms"
import plTerms from "../assets/txts/plTerms"

const Terms = () => {
  const intl = useIntl()
  const [termsFile, setTermsFile] = useState(plTerms)

  useEffect(() => {
    if (intl.locale === "pl") {
      setTermsFile(plTerms)
    } else {
      setTermsFile(enTerms)
    }
  }, [termsFile])

  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={intl.locale} />
      <Container>
        <h1>
          <FormattedMessage id="terms.header" />
        </h1>
        <p>
          <FormattedMessage id="terms.text" />
        </p>
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
      <Footer lang={intl.locale} />
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
