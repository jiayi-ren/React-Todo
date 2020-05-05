import React from 'react';

import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todolist : [],
      todoform : {
        task: '',
        id: Date.now(),
        completed: false
      }
    };
  }

  formChange = event =>{
    this.setState({
      todoform:{
        ...this.state.todoform,
        task: event.target.value
      }
    })
  }

  formSubmit = event =>{
    event.preventDefault()
    const newItem = {
      task: this.state.todoform.task,
      id: Date.now(),
      completed:false
    };
    this.setState({
      todolist: [
        ...this.state.todolist, newItem
      ],
      todoform: {
        ...this.state.todoform,
        task: '',
      }
    })
  }

  toggleCompleted = key =>{
    // use DOM only
    // event.target.classList.toggle("completed")

    // use State
    let update = this.state.todolist
    update[key].completed = true
    this.setState({
      todolist: update
    })
  }

  completedClear = event =>{

    // use DOM only
    // const completed = document.querySelectorAll('.completed')
    // for (var i = 0; i < completed.length; ++i) {
    //   completed[i].classList.add('hidden');
    // }

    // use State
    const filteredList = this.state.todolist.filter( item => !item.completed)
    console.log(filteredList)
    this.setState({
      todolist: filteredList
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todolist} toggleCompleted={this.toggleCompleted}/>
        <TodoForm form={this.state.todoform} onChange={this.formChange} onSubmit={this.formSubmit} onClear={this.completedClear}/>
      </div>
    );
  }
}

export default App;
