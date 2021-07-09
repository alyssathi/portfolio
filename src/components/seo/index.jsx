import React from "react"
import { Helmet } from "react-helmet"

export function Seo() {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>Alyssa Thi Portfolio</title>
      <meta
        name="description"
        content="Alyssa Thi's portfolio for web development. You'll find contact information and a gateway to other projects."
      />
      <meta property="og:type" content="website" />
      <html lang="en" amp />
      <meta
        name="google-site-verification"
        content="google-site-verification=5MM3SSRtOixdmlNjEvCUQHJKCgozYxoR_Woyw4BQHU4"
      />
    </Helmet>
  )
}
