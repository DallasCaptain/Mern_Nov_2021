import React, { Component } from 'react'
import styles from './header.css'


const spanStyle ={
        background: 'aquamarine',
        color: 'firebrick',
}

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Carl'
        }
    }

    render(){
        return <div>
            <h1 >Welcome, { this.props.yournamehere }</h1>
            {this.props.children}
            <span style={spanStyle}>Search</span><input onChange={(e)=>{this.setState({name:e.target.value})}}></input>
            <p>Lets look for {this.state.name}</p>
        </div>

    }
}

export default Header