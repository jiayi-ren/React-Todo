import React from 'react';

class Todo extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <p onClick={this.props.completed}>{this.props.item.task}</p>
        );
    }
}

export default Todo;