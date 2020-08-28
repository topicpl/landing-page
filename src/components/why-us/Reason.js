import React from "react"
import styled from "styled-components"

const Reason = ({ lang }) => {
  return (
    <StyledReason>
      {lang === "pl" ? (
        <div>
          <ReasonHeader>Dlaczego tworzymy Topic?</ReasonHeader>
          <ReasonText>
            Zauważyliśmy, że nawet w erze mediów społecznościowych nawiązywanie
            bliższej relacji jest owiane strachem przed odrzuceniem oraz
            podświadomie wymuszoną potrzebą uzasadnienia próby nawiązania
            kontaktu. Naszym głównym celem jest zburzenie tych barier oraz
            łączenie osób o podobnych pasjach.
            <br />
            <br />
            Na rynku nie ma aktualnie platformy łączącej idee komunikatorów
            wideo z forami tematycznymi zrzeszającymi ludzi o tych samych
            zainteresowaniach. Nasze rozwiązanie redefiniuje pojęcie “random
            chat” i prezentuje wykorzystanie tej formy w wartościowszy sposób.
            <br />
            <br />
            Nasza platforma daje również możliwości otwierające nowe formy
            konkurencji dla influencerów, youtuberów i streamerów lub możliwość
            zbliżenia się do swoich fanów.
            <br />
            <br />
            Niezależnie od tego czy chcesz dyskutować na ekscytujące Cię tematy,
            uczyć się od bardziej doświadczonych, poznać przyjaciela, z którym w
            przyszłości otworzysz firmę lub szukasz drugiej połówki która
            zrozumie Twoje pasje to Topic jest właśnie dla Ciebie!
          </ReasonText>
        </div>
      ) : (
        <div>
          <ReasonHeader>Why we're creating Topic?</ReasonHeader>
          <ReasonText>
            We noticed that even in the era of social media, establishing close
            relations is shrouded by fear of rejection and subconscious need of
            having an excuse to text someone. Our goal is to wreck these
            barriers and to link people with similar passions. <br />
            <br />
            Currently there is no platform that combines the idea of video
            communicators with forums that unite people with the same interests
            on the market. Our solution redefines the concept of random chat and
            presents the new way of use in a more valuable way.
            <br />
            <br />
            Our platform also opens new opportunities of competition for
            influencers, youtubers and streamers and lets them get closer to
            their fans.
            <br />
            <br />
            Regardless if you want to discuss the topic you’re excited about,
            learn from more experienced, meet a friend you will open a company
            with or you’re looking for a love that will understand your passion
            the Topic is just for you!
          </ReasonText>
        </div>
      )}
    </StyledReason>
  )
}

export default Reason

const StyledReason = styled.section`
  width: 100%;
`
const ReasonHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 50px;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
`
const ReasonText = styled.div`
  text-align: left;
  width: 90%;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`
