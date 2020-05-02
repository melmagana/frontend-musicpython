import React, {Component} from 'react';
import './App.css';
import RegisterLoginForm from './RegisterLoginForm'
import Logout from './Logout'
// import SongContainer from './SongContainer'
// import UserContainer from './UserContainer'
import MySongContainer from './MySongContainer'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            loggedIn: false,
            loggedInUsername: ''
        }
    }
    register = async (registerInfo) => {
        console.log('register() in app.js called with registerInfo', registerInfo)
        const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'

        try {
            const registerResponse = await fetch(url, {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(registerInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('registerResponse', registerResponse)
            const registerJson = await registerResponse.json()
            console.log('registerJson', registerJson)

            if (registerResponse.status === 201) {
                this.setState({
                    loggedIn: true,
                    loggedInUsername: registerJson.data.username
                })
            }
        } catch(err) {
            console.error("Error trying to register with API")
            console.error(err)
        }
    }
    login = async (loginInfo) => {
        console.log('login() in app.js called with loginInfo', loginInfo)
        const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'

        try {
            const loginResponse = await fetch(url, {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(loginInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('loginResponse', loginResponse)
            const loginJson = await loginResponse.json()
            console.log('loginJson', loginJson)

            if(loginResponse.status === 200) {
                this.setState({
                    loggedIn: true,
                    loggedInUsername: loginJson.data.username
                })
            }
        } catch(err) {
            console.error('Error trying to login with API')
            console.error(err)
        }
    }
    logout = async () => {
        try{
            const url = process.env.REACT_APP_API_URL + '/api/v1/users/logout'

            const logoutResponse = await fetch(url, {
                credentials: 'include'
            })
            console.log('logoutResponse', logoutResponse)
            const logoutJson = await logoutResponse.json()
            console.log('logoutJson', logoutJson)

            if(logoutResponse.status === 200) {
                this.setState({
                    loggedIn: false,
                    loggedInUsername: ''
                })
            }
        } catch(err) {
            console.error('Error logging out')
            console.error(err)
        }
    }

    render() {
        return(
            <div className="App">
                <h1>Hello, World!</h1>
                {   
                    this.state.loggedIn
                    ?
                    <div>
                        <Logout username={this.state.loggedInUsername} logout={this.logout}/>
                        <MySongContainer />
                    </div>
                    :
                    <RegisterLoginForm 
                        login={this.login}
                        register={this.register}
                    />
                }
            </div>
        )
    }
}