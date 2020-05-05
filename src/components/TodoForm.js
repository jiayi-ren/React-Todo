import React from 'react';

class TodoForm extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form' onSubmit={this.props.onSubmit}>
                <form>
                    <input name='item' value={this.props.form.task} type='text' placeholder='...todo' onChange={this.props.onChange}></input>
                    <button onClick={this.props.onSubmit}>Add Todo</button>
                    <button onClick={this.props.onClear}>Clear Completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm