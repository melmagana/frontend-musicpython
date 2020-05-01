import React, {Component} from 'react';
import './App.css';
import RegisterForm from './RegisterForm'

export default class App extends Component {
    render() {
        console.log(process.env)
        return(
            <div className="App">
                <h1>Hello, World!</h1>
                <RegisterForm />
            </div>
        )
    }
}