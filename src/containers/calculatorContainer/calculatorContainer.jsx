import React from 'react';
import Button from 'react-bootstrap/Button';
import './calculatorContainer.css';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader'
import Crud from '../../components/crud.jsx';

class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
    this.addTwo = this.addTwo.bind(this);
  }

addTwo() {
  this.setState(prevState => ({
    total: prevState.total + 2 
  }));
}

  render() {
    return (
      <div className="vertical-align-center calc-index">
        <div className="container justify-content-center d-flex px-0 calc-container-box">
          <div className="row w-100">
             <div className="col-12">
                <h1> Redux 101: Increment and Decrement </h1>
                <hr />
              </div>
              <div className="col-12 d-flex justify-content-center px-0 calc-button-box">
                <Button className="mr-5" variant="secondary" onClick={this.addTwo}>Add 2</Button>
                <Button className="mr-5" variant="success" onClick={this.props.onIncrementCounter}>INCREMENT</Button>
                <Button className="mr-5" variant="danger" onClick={this.props.onDecrementCounter}>DECREMENT</Button>
                <Button variant="info" onClick={this.props.onIncrementByFive}>ADD 5</Button>
             </div>
             <div className="col-12">
                <h2>Redux Total: {this.props.ctr} </h2>
                <h2>Local State Total(only works for add 2): {this.state.total}</h2>
             </div>
             <div className="col-12">
                <hr />
                <h1> Making a API call </h1>
                <div className="calc-loading-indicator">
                <LoadingOverlay
                  active={this.props.isPending}
                  spinner={<BounceLoader />}
                >
                </LoadingOverlay>  
                </div>
                <hr />
              </div>
              <div className="col-12 d-flex justify-content-center px-0 calc-button-box">
                <Button varraint="info" onClick={this.props.onLaunchApi}>RETREIVE DATA </Button>
             </div>
             <div className="col-12">
               <div>
                <h2>User ID: {this.props.userData.userId} </h2>
                <h2>ID Number: {this.props.userData.id} </h2>
                <h2>Title: {this.props.userData.title} </h2>
                {this.props.hasSucceeded && (
                  <div>
                    API information was fetched successfully
                  </div> 
                )
                }
                {this.props.hasFailed && (
                  <div>
                    API information was not fetched. There may be an issue with the API.
                  </div> 
                )
                }
               </div>
               <Crud />
             </div>
          </div>   
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    userData: state.apiData,
    isPending: state.isPending,
    hasFailed: state.hasFailed,
    hasSucceeded: state.hasSucceeded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onIncrementByFive: () => dispatch({type: 'INCREMENT_BY_FIVE'}),
    onLaunchApi: () => dispatch({type: 'LAUNCH_API'})
  }
}

CalculatorContainer.defaultProps = {
  userData: {
    userId: null,
    id: null,
    title: ''
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);