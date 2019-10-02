import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
 
class Username extends Component {
    constructor(props) {
    super(props);
    //setting initial state
    this.state = {  value: '',
                    myList: this.props.value
                 };
    //binding our methods in the constructor
    this.handleChange = this.handleChange.bind(this);
  }

 
  handleChange(event) {
    //handles users typing in the text box    
    this.setState({value: event.target.value});
  }
 
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center mt-3 mb-2">
          <h2 className="mr-5 ">{this.props.value}</h2>
             <input type="text" value={this.state.value} onChange={this.handleChange} />
              <Button 
               onClick={() => this.props.onUpdate(this.props.id, this.state.value, this.props.index)}
               varient="secondary"
              >
                Update
              </Button>  
            <Button
              onClick={() => this.props.onDelete(this.props.id)}
              variant="danger"
            >
              Delete
            </Button>
            
        </div>
      </React.Fragment>
    );
  }
}
 
export default Username;