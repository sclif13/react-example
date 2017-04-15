import React, { Component } from 'react';
import './App.css';
import Figure from '../Figure/Figure';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    const { isActive, pushStateFigure } = this.props;
    return (
      <div className="App" onClick={this.handlerClick}>
        <Figure isActive={isActive} pushStateFigure={pushStateFigure} />
      </div>
    );
  }
  handlerClick = e => {
    e.preventDefault();
    const { isActive, pushStateApp } = this.props;
    if (isActive) {
      return;
    }
    pushStateApp();
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
