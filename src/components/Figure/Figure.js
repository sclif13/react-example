import React, { Component } from 'react';
import './Figure.css';

class Figure extends Component {
  render() {
    const { isActive } = this.props;
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomFigure;
    if (isActive) {
      if (Math.random() < 0.5) {
        const d = getRandomInt(30, 200);
        randomFigure = {
          borderRadius: "100px",
          width: d + "px",
          height: d + "px",
          backgroundColor: `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`,
          top: `${window.innerHeight/2 - d/2}px`
        }
      } else {
        const d = getRandomInt(20, 150);
        randomFigure = {
          width: d + "px",
          height: d + "px",
          backgroundColor: `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`,
          top: `${window.innerHeight/2 - d/2}px`
        }
      };
    }
    return (
      (isActive) ? <div className="Figure" style={randomFigure} onClick={this.handlerClick}></div> : null
    );
  }
  handlerClick = e => {
    e.preventDefault();
    const { pushStateFigure } = this.props;
    pushStateFigure();
  }
}

export default Figure;