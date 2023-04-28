import React, { Component, useState } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props){
        super();
        this.state = {
            item: '',
        }

        this.onChange = this.onChange.bind(this)
    }

    const [item, setitem] = useState(second)

    onChange(e){
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const userInput = {item}
        console.log(userInput)
    }

    
    render() { 
        return (
            <div className='todo'>
                <div className='header'>
                    <h1>Welcome to Market Basket App</h1>
                    <p>What do you intend to buy today?</p>
                </div>
                <div className='input'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id='name-input'
                            placeholder='Enter intem to buy'
                            onChange={this.onChange}
                            value={this.state.item}                     
                        />
                        <button>Add</button>
                    </form>
                </div>
                <div className='display'>
                    <ul>
                        {list.map((a)=><li>
                            {item}
                            </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Todo;