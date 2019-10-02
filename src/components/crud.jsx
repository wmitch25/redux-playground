import React from 'react';
import Username from './username';
import Button from 'react-bootstrap/Button';

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  value: '',
                    id: 0,
                    items: []
                 };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete = itemId => {
    
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };

  handleUpdate = (itemId, myVal, index) => {
    let new_object = {
      value: myVal,
      id: Math.random()
    }
        var my_array = this.state.items;
        my_array.map(item => {
          if(item.id === itemId){
            item.value = myVal
          } 
        })
        console.log(index);
      
        //set state with new array
        this.setState(prevState => ({
        items: my_array
     }))
  }

  handleCreate(event) {
    let id = Math.random();

    if(this.state.value === ''){
      alert('User can not be blank')
    }else {
     this.setState(prevState => ({
        items: [...prevState.items, 
        {id: id, value: prevState.value}]
     }))
    }
  
    event.preventDefault();
  }

   handleChange(event) {
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