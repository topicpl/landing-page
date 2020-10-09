import React, { useEffect, useState } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import enFAQ from "../assets/txts/enFAQ"
import plFAQ from "../assets/txts/plFAQ"

const FAQ = () => {
  const intl = useIntl()
  const [faqFile, setFaqFile] = useState(plFAQ)

  useEffect(() => {
    if (intl.locale === "pl") {
      setFaqFile(plFAQ)
    } else {
      setFaqFile(enFAQ)
    }
  }, [faqFile])

  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={intl.locale} />
      <Container>
        {faqFile.map(item => (
          <FAQInner>
            <Question>{item.Q}</Question>
            <Answer>{item.A}</Answer>
          </FAQInner>
        ))}
        <Answer>
          <FormattedMessage id="faq.1" />
          <FormattedMessage id="faq.2" />
          <FormattedMessage id="faq.3" />
          <FormattedMessage id="faq.4" />
          <FormattedMessage id="faq.5" />
          <FormattedMessage id="faq.6" />
        </Answer>
      </Container>
      <Footer lang={intl.locale} />
    </MasterStyle>
  )
}

export default FAQ

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
const FAQInner = styled.div`
  margin-bottom: 20px;
`
const Question = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
`
const Answer = styled.p`
  margin: 0;
`
