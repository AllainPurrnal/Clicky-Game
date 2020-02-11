//imports dependencies and files
import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CatCard from "./components/CatCard";
import Footer from "./components/Footer";
import cat from "./cat.json";

//sets state to 0 or empty
class App extends Component {
  state = {
    cat,
    clickedCat: [],
    score: 0
  };

//when you click on a card ... the cat is taken out of the array
  imageClick = event => {
    const currentCat = event.target.alt;
    const CatAlreadyClicked =
      this.state.clickedCat.indexOf(currentCat) > -1;

//if you click on a cat that has already been selected, the game is reset and cards reordered
    if (CatAlreadyClicked) {
      this.setState({
        cat: this.state.cat.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCat: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available cat, your score is increased and cards reordered
    } else {
      this.setState(
        {
          cat: this.state.cat.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCat: this.state.clickedCat.concat(
            currentCat
          ),
          score: this.state.score + 1
        },
//if you get all 12 cats correct, you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cat: this.state.cat.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCat: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, CatCard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.cat.map(cat => (
            <CatCard
          
              imageClick={this.imageClick}
              id={cat.id}
              key={cat.id}
              image={cat.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;