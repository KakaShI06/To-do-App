import React from 'react';
import TodoItems from './TodoItems.js';
import './App.css';

class App extends React.Component {
    constructor(){
        super()

        this.state = {
            items : [],
            currentItem : {
                txt: "",
                key: "",
                completed : false
            }
        }

    this.handleInput = this.handleInput.bind(this)
    this.addItems = this.addItems.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    }


    handleInput(event){
        this.setState({
            currentItem : {
                txt : event.target.value,
                key : Date.now(),
                completed : false
            }
        })
    }

    addItems(event){
        event.preventDefault();
        const newItems = this.state.currentItem

        if(newItems.txt !== ""){
            const Items = this.state.items
            Items.push(newItems)

            // console.log(newItems)

            this.setState({
                items: Items,
                currentItem : {
                    txt: "",
                    key: "",
                    completed : false
                }
            })
        }
    }

    handleDelete(key){
        const list = this.state.items

        const updated = list.filter((i) => i.key !== key)

        this.setState({
            items : updated
        })
    }

    render(){
        return (
            <div className="Todo-List">
               <h1>Todo Task List</h1>
               <main className= "App">
                    <form onSubmit = {this.addItems}>
                        <input 
                            type = "Text" 
                            placeholder="Input Task" 
                            className = "Input-Text"
                            value = {this.state.currentItem.txt}
                            onChange = {this.handleInput}
                        />
                        <button type = "submit"> Add!</button>
                    </form>

                    <div >
                        {
                            this.state.items.map((todo) => <div className = "list-of-items" key = {todo.key}> 
                                                                <TodoItems 
                                                                    task = {todo.txt} 
                                                                    //completed = {todo.completed}
                                                                /> 
                                                                <button onClick = {() => this.handleDelete(todo.key)}> X </button>
                                                            </div>)
                        }
                    </div>
                
               </main>
               
   
           </div>
       )
    }
}

export default App;
