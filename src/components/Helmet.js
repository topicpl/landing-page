import React from "react"
import { Helmet as HelmetRoot } from "react-helmet"

const Helmet = () => (
  <HelmetRoot>
    <html lang="pl" />
    <meta charSet="utf-8" />
    <meta name="description" content="The platform for people with passion." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="keywords"
      content="videochat, meet, interests, chat, video, people, talk"
    />
    <meta name="author" content="Topic team" />
    <title>Topic — Welcome Page</title>
  </HelmetRoot>
)

export default Helmet
