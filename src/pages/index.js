import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../../public/16maincir.png"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topic — Welcome Page</title>
        <link rel="icon" href={favicon} />
      </Helmet>
    </div>
  )
}
