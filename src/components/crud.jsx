import React from 'react';
import Username from './username';
import Button from 'react-bootstrap/Button';

class Crud extends React.Component {
  constructor(props) {
    super(props);
    //setting initial state
    this.state = {  value: '',
                    id: 0,
                    items: []
                 };
    //binding our methods in the constructor             
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  handleDelete = itemId => {
    //using filter to remove item in array if it matches the id sent to the method
    const items = this.state.items.filter(item => item.id !== itemId);
    //sets the state to the new array
    this.setState({ items: items });
  };

  handleUpdate = (itemId, myVal, index) => {
        //creates new array, sets it to the state array
        var my_array = this.state.items;
        my_array.map(item => {
          //if the item in the array matches the id sent to the method, make the value the value 
          //sent to the method
          if(item.id === itemId){
             //arrow functions expect return value 
             return item.value = myVal
          } else {
            //return null if 
            return null
          }
        })
       
        //set state with new array
        this.setState(prevState => ({
        items: my_array
     }))
  }

  handleCreate(event) {
    //create a random id for the array, react will complain if each child does not have key
    let id = Math.random();
    //if the value is blank, alert user to add something
    if(this.state.value === ''){
      alert('User can not be blank')
    }else {
      //set the state by adding the new object to the end of the array
     this.setState(prevState => ({
        items: [...prevState.items, 
        {id: id, value: prevState.value}]
     }))
    }
  }

   handleChange(event) {
    //handles users typing in the text box 
    this.setState({value: event.target.value});
  }

  render() {
    return (
    <div>
      <div className="col-12">
        <hr />
        <h1> Making a CRUD Application </h1>
        <hr /> 
      </div>
      <div className="my-3">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Button varient="primary" onClick={this.handleCreate}> Enter </Button>
      </div>
        
      {this.state.items.map(item => (
          <Username
            key={item.id}
            index={this.state.items.indexOf(item)}
            value={item.value}
            onDelete={this.handleDelete}
            onUpdate={this.handleUpdate}
            id={item.id}
          />
        ))}
    </div>  
    );
  }
}

export default Crud;