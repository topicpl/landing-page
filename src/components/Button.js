import React from "react"
import styled from "styled-components"
import { event } from 'react-ga';
const Button = ({ lang }) => {
  const setEvent = () => event({ category: 'landing-buttons', action: 'click', label: 'meet-someone' });
  return (
    <a href="/app" onClick={setEvent}>
      <Container>{lang === "pl" ? "Poznaj kogoś" : "Meet someone"}</Container>
    </a>
  )
}

export default Button

const Container = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.color.red[500]};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  border-radius: 5px;
  border: none;
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 0.5s 0s;
  font-size: 1rem;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.red[600]};
  }
  :focus {
    border: none;
    outline: none;
  }

  @media (min-width: 500px) {
    width: 300px;
  }
`
