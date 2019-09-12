import React from "react";
import { Button, } from "semantic-ui-react";

const Card = ({ id, front, back, remove, toggleCard, showBack, editCardFront, editCardBack }) => (
<div classNamne="container">
  <span className="card">

    {!showBack ?

      <div className="cardFront">
        <div> {front} </div>
        <Button
          color="blue"
          size="tiny"
          onClick={() => toggleCard(id)}
        >
          Flip
        </Button>
        <Button
          color="purple"
          size="tiny"
          onClick={() => editCardFront(id)}
        >
          Edit
        </Button>
      </div>
      :
      <div className="cardBack">
        <div> {back} </div>
        <Button
          color="blue"
          size="tiny"
          onClick={() => toggleCard(id)}
        >
          Flip
        </Button>
        <Button
          color="purple"
          size="tiny"
          onClick={() => editCardBack(id)}
        >
          Edit
        </Button>
        <Button
          color="red"
          size="tiny"
          onClick={() => remove(id)}
        >
          Delete
        </Button>
      </div>
    }
  </span>
  </div>
);

export default Card;