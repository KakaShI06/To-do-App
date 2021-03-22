import React from 'react'
import './index.css'


class TodoItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            completed : false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState((prevState) => {
            return {
                completed : !prevState.completed
            }
        })
    }

    render(){
        const styleInfo = this.state.completed ? "line-through" : "none";

        return (
            <div className = "Item-list">
                <button type="submit" onClick = {this.handleClick} > Done! </button>
                <label style = {{textDecoration : styleInfo}} > {this.props.task} </label>      
            </div>
        ) 
    }
}

export default TodoItems;