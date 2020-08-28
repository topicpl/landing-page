import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import detectBrowserLanguage from "detect-browser-language"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import enFAQ from "../assets/txts/enFAQ"
import plFAQ from "../assets/txts/plFAQ"

const FAQ = () => {
  const [lang, setLang] = useState("pl")
  const [faqFile, setFaqFile] = useState(plFAQ)

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    if (detectedLang.includes("pl")) {
      setLang("pl")
      setFaqFile(plFAQ)
    } else {
      setLang("en")
      setFaqFile(enFAQ)
    }
  }, [lang, faqFile])

  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={lang} />
      <Container>
        {faqFile.map(item => (
          <FAQInner>
            <Question>{item.Q}</Question>
            <Answer>{item.A}</Answer>
          </FAQInner>
        ))}

        {lang === "pl" ? (
          <Answer>
            1. Po otwarciu aplikacji, użytkownik wybiera język, w którym będzie
            rozmawiał z innymi.
            <br />
            <br />
            2. Następnie, użytkownik wybiera swoje zainteresowanie spośród
            przedstawionych mu kategorii, w których chce rozmawiać.
            <br />
            <br />
            3. Użytkownik jest przekierowywany do okna takiego jak w Snapchat,
            widzi tylko obraz ze swojej kamery, wraz z opcjami takimi jak
            wyszukiwanie nowych osób lub kopiowanie linku, który odpowiada za
            dostęp do obecnego kanału. Ostatnią, lecz również ważną funkcją jest
            opcja zmiany preferencji języka i kategorii, bez niepotrzebnego
            resetowania aplikacji.
            <br />
            <br />
            4. W obecnym oknie, użytkownik może rozpocząć szukanie kanałów z
            losowymi osobami lub zapraszać swoich przyjaciół do pokoju, w celu
            wspólnego doświadczania wrażeń.
            <br />
            <br />
            5. Dopiero teraz rozpoczyna się prawdziwa przygoda, ponieważ rozmowa
            jeden na jednego nie jest tak ekscytująca, jak rozmowa w kilka osób
            jednocześnie. W tym momencie do użytkownika dochodzi kilka funkcji,
            takich jak np. możliwość przełączenia się na czat tekstowy,
            wyciszenia mikrofonu, wygaszenia kamery, opuszczenia obecnego kanału
            lub też wyszukania następnych pokoi. Opcja natychmiastowego
            opuszczania kanału jest oczywista i kieruje ona do okna, w którym
            widzimy tylko swoją kamerę. Przycisk wyszukiwania następnych osób
            pozwala na szukanie potencjalnych użytkowników, obracających się w
            kręgu naszych zainteresowań. Wszystkie opcje wyżej wymienione
            zostają cały czas z użytkownikiem, bez względu na to ile osób
            rozmawia aktualnie w pokoju.
            <br />
            <br />
            6. Powiedzmy, że rozmawiamy z czterema osobami i chcemy zabrać głos
            w jakiejś ważnej sprawie, tym samym nie przerywając nikomu dyskusji.
            Możemy w tym samym momencie skorzystać z oznaczenia danego rozmówcy,
            korzystając z czatu tekstowego wpisując jego kolor, a następnie
            wysłać do niego wiadomość. Nasz serwis stawia na anonimowość., więc
            użytkownik nie musi zakładać żadnych kont, wyjątek stanowi usługa
            Premium. Z następną funkcją użytkownik ma styczność wtedy kiedy chce
            dojść do kanału, na którym rozmawia co najmniej dwóch użytkowników.
            Użytkownik ten jest domyślnie wyciszany na 10 sekund, ponieważ
            mógłby on w tym czasie zacząć przeszkadzać innym rozmówcom. Jeżeli
            użytkownik okaże się być na tyle złośliwy, że zacznie sprawiać
            problemy na kanale, na zasadzie demokratycznego głosowania grupa
            może wyrzucić go z pokoju, bądź zgłosić za naruszenia. Dostarczamy
            również takich opcji jak wyciszanie i wyłączanie kamery konkretnego
            użytkownika.{" "}
          </Answer>
        ) : (
          <Answer>
            1. After opening our app, the user chooses the language he/ she
            wishes to talk to others.
            <br />
            <br />
            2. Next, the user picks the category he/ she wants to talk about.
            <br />
            <br />
            3. User is redirected to a view that just like on snapchat shows
            only his camera view with options to search for a lobby and copy a
            share link. The last but not least option is a settings panel that
            lets you change language and category preferences without restarting
            the app.
            <br />
            <br />
            4. From that point the user can search for a lobby with random
            people or invite a friend and continue the experience together.
            <br />
            <br />
            5. Now the journey really begins but the conversation one on one is
            not as exciting. Some options come into play though and the user now
            has a text chat, camera, microphone exclusion and leave now or
            search for new lobby options. The leave now option is obvious enough
            but the search for a new lobby button lets you look for new
            potential people without disconnecting current ones. All of the
            above options stay for the rest no matter the amount of people in
            the lobby.
            <br />
            <br />
            6. Let’s say you’re talking with 4 people and we got a few more
            interesting points we’d like to share with you. First if you want to
            make a point to someone and not interrupt the conversation you can
            use a chat and tag someone by its color as it’s prefered recognition
            system, we provide some anonymity and there is no account creation,
            except premium accounts in our flow. The next one is that user that
            is joining a lobby of at least two people is by default muted for
            10s not to spam, shout and interrupt others. If the user ends up
            malicious he can be kicked by a vote of the rest and as well
            reported. We provide options such as muting the specific person or
            hiding his camera view.
          </Answer>
        )}
      </Container>
      <Footer lang={lang} />
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
