import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({title: e.target.value}); //se puede usar [e.target.name] en vez de title cuando se tiene mas de un campo (por ej. formulario)

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type="text" name="title" placeholder="Add Todo..." style={{flex: '10', padding: '5px'}} onChange={this.onChange}/>
        <input type="submit" value="Submit" style={{flex: '1'}} className="btn"/>
      </form>
    )
  }
}

export default AddTodo
