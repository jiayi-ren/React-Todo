// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';
import './Todo.css';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='list'>
            {
                this.props.list.map( (item, index) =>{
                    return(
                        <Todo key={index} item={item} completed={this.props.toggleCompleted}/>
                    )
                })
            }
            </div>
        )
    };
}

export default TodoList;