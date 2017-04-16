import React, { Component } from 'react';
import './App.css';
import Figure from '../Figure/Figure';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    const { items, pushStateFigure } = this.props;
    return (
      <div className="App" onClick={this.handlerClick}>
        {items.map((item, index) => {
          return (<Figure key={index} id={index} styles={item.styles} pushStateFigure={pushStateFigure} />)
        })}
      </div>
    );
  }
  handlerClick = e => {
    e.preventDefault();
    const { pushStateApp, pushStateFigure } = this.props;
    if (e.target.className === "App") {
      pushStateApp(e.clientX, e.clientY);
    } else if (e.target.className === "Figure" && e.target.id) {
      pushStateFigure(e.target.id);
    }
  }
}

const mapStateToProps = (state, props) => {
  return { ...state.config }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
