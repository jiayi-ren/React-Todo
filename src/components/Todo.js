import React from 'react';

class Todo extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            // <p onClick={this.props.completed}>{this.props.item.task}</p>
            <p onClick={()=>{this.props.completed(this.props.index)}} style={this.props.item.completed? {textDecoration: "line-through"}: null}>{this.props.item.task}</p>
        );
    }
}

export default Todo;