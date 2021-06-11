import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards" id="My__Projects">
      <h1>MY PROJECTS </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="image/project-img-1.png"
              text="SAATHI is a professionalonline platform for all those who take their passion as a profession and need more than just one page of resume to describe their work and themselves.It's built with the framework of React.js and Firebase with proper authentication, feeds section, dynamic profile management, one-to-one chat section etc. with a highlighting feature under development."
              label="SAATHI"
              path="/"
              target=""
            />
            <CardItem
              src="image/project-img-6.png"
              text="Covid-Tracker is an API based Project which shows the spots indicating the presence of covid cases with different colors.Darker the color of spot, more the no. of cases are present in that region.It also uses Mapbox which is a custom online map provider for websites and applications. "
              label="Covid-Tracker"
              path="https://github.com/heyyy-satyammm/Corona-cases-Tracker/tree/master"
              target="_blank"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="image/project-img-4.png"
              text="Rock-Paper-Scissors is a back-end project with a basic front-end and a strong application of javascript and its properties.The complete logic  involves an introductory page with fade-in animation, a proper score board, results as win, loss and tie possibilites and also moving animations of hands to make the game lively."
              label="ROCK-PAPER-SCISSORS"
              path="https://github.com/heyyy-satyammm/Rock-Paper-Scissors/tree/master"
              target="_blank"
            />
            <CardItem
              src="image/project-img-2.png"
              text="It's a web version of Tinder App made with ReactJs framework including features of swiping left, right, super like and it also gives the swipe summary at the end of all profiles.The database is static and can actually become a good scale project with proper authentication and making profiles dynamic with proper database which is under development."
              label="TINDER CLONE"
              path="https://github.com/heyyy-satyammm/Tinder-Clone"
              target="_blank"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="image/project-img-7.png"
              text="It's front-end mini-project which shows an Animation card with 3D-effects. It's a pure Javascript and CSS based project which involves a really fine quality of 3D animation when one hovers on the Card."
              label="3D CARD"
              path="https://github.com/heyyy-satyammm/3D-Animation-Card"
              target="_blank"
            />
            <CardItem
              src="image/project-img-5.png"
              text="Ink9fable is a Portfolio website of an Artist and my recent client-based project under development.It's aims to showcase all the works of the artist so far in different fields of Art.The main focus is on front-end development and since the client is an artist himself, the bar is high. Apart from this, there is also a form section where visitors can apply for commission based hiring for their personal work."
              label="INK9FABLE"
              path="/"
              target=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
