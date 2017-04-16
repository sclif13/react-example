import React, { Component } from 'react';
import './Figure.css';

class Figure extends Component {
  render() {
    const { id, styles } = this.props;
    return (
      <div className="Figure" id={id} style={styles} ></div>
    );
  }
}

export default Figure;