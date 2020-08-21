import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../assets/logos/16maincir.png"
import MasterStyle from "../assets/styles/MasterStyle"
import Home from "./home/index.en"

export default function Main() {
  return (
    <MasterStyle>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The platform for people with passion."
        />
        <meta
          name="keywords"
          content="videochat, meet, interests, chat, video, people, talk"
        />
        <meta name="author" content="Topic team" />
        <title>Topic — Welcome Page</title>
        <link rel="icon" href={favicon} />
        <html lang="en" />
      </Helmet>
      {/* put logic if needed on language detection */}
      <Home />
    </MasterStyle>
  )
}
