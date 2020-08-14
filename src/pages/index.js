import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../../public/16maincir.png"
import MasterStyle from "../assets/styles/MasterStyle"
import Home from "./home/index.en"

export default function Main() {
  return (
    <MasterStyle>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topic — Welcome Page</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      {/* put logic if needed on language detection */}
      <Home />
    </MasterStyle>
  )
}
