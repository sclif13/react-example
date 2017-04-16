import React, { Component } from 'react';
import './Figure.css';

class Figure extends Component {
  render() {
    const { id, styles } = this.props;
    return (
      <div className="Figure" id={id} style={styles} onClick={this.handlerClick}></div>
    );
  }
  handlerClick = e => {
    e.preventDefault();
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble=true)
    const { id, pushStateFigure } = this.props;
    pushStateFigure(id);
  }
}

export default Figure;