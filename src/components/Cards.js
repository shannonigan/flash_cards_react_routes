import React from "react";
import Card from "./Card";
import { Container, } from "semantic-ui-react";

const Cards = (props) => (
  <Container>
    {
      props.cardsArray.map(card => (
        <Card
        key={card.id}
        {...card }
        remove={props.remove}
        toggleCard={props.toggleCard}
        editCardFront={props.editCardFront}
        editCardBack={props.editCardBack}
        />
      ))
    }
  </Container>
);

export default Cards;