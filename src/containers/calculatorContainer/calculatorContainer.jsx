import React from 'react';
import Button from 'react-bootstrap/Button';
import './calculatorContainer.css';
import { connect } from 'react-redux';

class CalculatorContainer extends React.Component {

  incrementOne = () => {
    this.setState(prevState => {
        return {countTotal: prevState.countTotal + 1}
     })
  };

  decrementOne = () => {
    this.setState(prevState => {
        return {countTotal: prevState.countTotal - 1}
     })
  };

  render() {
    return (
      <div className="vertical-align-center">
        <div className="container justify-content-center d-flex px-0 calc-container-box">
          <div className="row w-100">
             <div className="col-12">
                <h1> Redux 101: Increment and Decrement </h1>
                <hr />
              </div>
              <div className="col-12 d-flex justify-content-center px-0 calc-button-box">
                <Button className="mr-5" variant="success" onClick={this.props.onIncrementCounter}>INCREMENT</Button>
                <Button variant="danger" onClick={this.props.onDecrementCounter}>DECREMENT</Button>
             </div>
             <div className="col-12">
                <h2>Current Total: {this.props.ctr} </h2>
             </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);