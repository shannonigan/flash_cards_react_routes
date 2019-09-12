import React from "react";
import Cards from "./Cards";
import CardForm from "./CardForm";
import { Container, Header, } from "semantic-ui-react";

class Flash extends React.Component {
  state = {
    cards: [
      { id: 1, front: "Front", back: "Back", showBack: false, },
    ],
  };


  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };


  addCard = (cardData) => {
    const card = { id: this.getId(), ...cardData, }
    this.setState({ cards: [card, ...this.state.cards] })
  };


  editCardFront = (id) => {
    let card = this.state.cards.filter(card => card.id === id)[0];
    let newCard = prompt(`What would you like to change '${card.front}' to?`);

    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id == id) {
          return { ...card, front: newCard, };
        }
        return card;
      })
    })
  };


  editCardBack = (id) => {
    let card = this.state.cards.filter(card => card.id === id)[0];
    let newBack = prompt(`What would you like to change '${card.back}' to?`);
    debugger

    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id == id) {
          return { ...card, back: newBack, };
        }
        return card;
      })
    })
  };


  removeCard = (id) => {
    const cards = this.state.cards.filter(card => {
      if (card.id !== id)
        return card;
    });

    this.setState({ cards: cards, });
  };


  toggleCard = (id) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id === id) {
          return { ...card, showBack: !card.showBack }
        }
        return card;
      })
    })
  };


  render() {
    return (
        <Container style={{ marginTop: "25px", }}>
          <Header
            as="h1"
            color="violet"
            textAlign="center"
          >
            {this.props.title}
          </Header>

          <Cards
            remove={this.removeCard}
            cardsArray={this.state.cards}
            toggleCard={this.toggleCard}
            editCardFront={this.editCardFront}
            editCardBack={this.editCardBack}
          />

          <CardForm
            addCard={this.addCard}
          />

        </Container>
    
    );
  };
};


export default Flash;