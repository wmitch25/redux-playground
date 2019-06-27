import React from 'react';
import Button from 'react-bootstrap/Button';
import './calculatorContainer.css';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader'

class CalculatorContainer extends React.Component {
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
                <Button className="mr-5" variant="success" onClick={this.props.onIncrementCounter}>INCREMENT</Button>
                <Button className="mr-5" variant="danger" onClick={this.props.onDecrementCounter}>DECREMENT</Button>
                <Button className="mr-5" variant="info" onClick={this.props.onIncrementByFive}>ADD 5</Button>
                <Button varraint="primary" onClick={this.props.onLaunchApi}>LAUNCH API</Button>
             </div>
             <div className="col-12">
                <h2>Current Total: {this.props.ctr} </h2>
             </div>
             <div className="col-12">
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
                <h2>User ID: {this.props.payload.userId} </h2>
                <h2>ID Number: {this.props.payload.id} </h2>
                <h2>Title: {this.props.payload.title} </h2>
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
    payload: state.apiData,
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

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);