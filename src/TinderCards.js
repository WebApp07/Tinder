import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Lionel Messi",
      url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSrQcGWFbrIUoB-XbjFNoR-1R6eO4phMrMv5Px550qnwct_9NbCFyY3dmCdejxEdWF_g-uhHuLnLPbmb68",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1",
    },
    {
      name: "Eden Hazard",
      url: "https://assets-fr.imgfoot.com/media/cache/1200x675/eden-hazard-2223-1.jpg",
    },
  ]);

  const swiped = (direction) => {
    console.log("You swiped: " + direction);
  };

  const outOfFrame = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
