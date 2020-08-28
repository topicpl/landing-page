import React from "react"
import styled from "styled-components"

const Posts = ({ lang }) => {
  return (
    <StyledPosts>
      <PostsHeading>
        {lang === "pl"
          ? "Sprawdź nasze media społecznościowe i udostępnij!"
          : "Check our social media and share!"}
      </PostsHeading>
      <PostsInner>
        <div
          class="fb-page"
          data-href="https://www.facebook.com/topicplatform/"
          data-tabs="timeline"
          data-width="350"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/topicplatform/"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/topicplatform/">Topic</a>
          </blockquote>
        </div>
        <a
          class="twitter-timeline"
          data-lang="en"
          data-width="350"
          data-height="600"
          data-theme="light"
          href="https://twitter.com/topicplatform?ref_src=twsrc%5Etfw"
        >
          Tweets by topicplatform
        </a>
      </PostsInner>
    </StyledPosts>
  )
}

export default Posts

const StyledPosts = styled.section`
  width: 100%;
  margin-top: 50px;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`
const PostsHeading = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 80%;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 50px;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
`
const PostsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .fb-page {
    width: 350px;
    margin-bottom: 50px;

    @media (min-width: 800px) {
      margin-bottom: 0;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (min-width: 1400px) {
    width: 1000px;
    margin: 0 auto;
  }
`
