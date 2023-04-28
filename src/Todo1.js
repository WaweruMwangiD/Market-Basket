import React, {useState} from 'react'
import './Todo.css'

function Todo() {
    const [item, setItem] = useState('');
    const [list, setlist] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInput = {item}
        console.log(userInput)
        if(item){
            setlist((ls) => [...ls, item])
            setItem("")
        }
    }

    const deletInput = (deleteItem) =>{
        const newItems = list.filter((item) => item !== deleteItem)
        setlist(newItems)
    }

    return ( 
        <div className='todo'>
            <div className='header'>
                <h1>Welcome to Market Basket App</h1>
                <p>What do you intend to buy today?</p>
            </div>
            <div className='input'>
                <form onSubmit={handleSubmit}>
                    <input
                        id='name-input'
                        placeholder='Enter intem to buy'
                        onChange={(e)=>setItem(e.target.value)}
                        value={item}                     
                    />
                    <button>Add</button>
                </form>
            </div>
            <div className='display'>
                <ul>                    
                    {
                        list.map(item => <li className='list-item' key={item}                            >
                            {item}
                            <button className='btn-remove' onClick={() => deletInput()}>Remove</button>
                            </li>)
                    }
                </ul>
            </div>
        </div>
     );
}

export default Todo;