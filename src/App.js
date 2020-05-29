import React, {Component} from 'react';
import './App.css';
import RegisterLoginForm from './RegisterLoginForm'
import Home from './Home'
import UserContainer from './UserContainer'
import MySongContainer from './MySongContainer'
import SongContainer from './SongContainer'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            loggedIn: false,
            loggedInUsername: '',
            currentView: 'home',
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
                    loggedInUsername: registerJson.data.username,
                    currentView: 'home',
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
                    loggedInUsername: loginJson.data.username,
                    currentView: 'home',
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
                    loggedInUsername: '',
                    currentView: 'login'
                })
            }
        } catch(err) {
            console.error('Error logging out')
            console.error(err)
        }
    }
    setViews = async (newView) => {
        this.setState({
            currentView: newView
        })
    }
    render() {
        return(
            <div className="App">
                <React.Fragment>
                    <div className="Navigation">
                        {
                            this.state.loggedIn === true
                            ?
                            <p>Logged in as&nbsp;<b>{this.state.loggedInUsername}</b></p>
                            :
                            null
                        }

                        <div className="Link"><span onClick={() => this.setViews('home')}>Home</span></div>
                        <div className="Link"><span onClick={() => this.setViews('users')}>Users</span></div>
        
                        {
                            this.state.loggedIn === true
                            ?
                            <React.Fragment>
                                <div className="Link"><span onClick={() => this.setViews('allSongs')}>Songs</span></div>
                                <div className="Link"><span onClick={() => this.setViews('myCollection')}>My Collection</span></div>
                                <div className="Link"><span onClick={this.logout}>Logout</span></div>
                            </React.Fragment>
                            :
                            <div className="Link"><span onClick={() => this.setViews('login')}>Sign In</span></div>
                        }
                    </div>
                    <div className="Pages">
                        {
                            this.state.currentView === 'home'
                            ?
                            <Home />
                            :
                            null
                        }
                        {
                            this.state.currentView === 'users'
                            ?
                            <UserContainer />
                            :
                            null
                        }
                        {
                            this.state.currentView === 'allSongs'
                            ?
                            <SongContainer />
                            :
                            null
                        }
                        {
                            this.state.currentView === 'myCollection'
                            ?
                            <MySongContainer />
                            :
                            null
                        }
                        {
                            this.state.currentView === 'login'
                            ?
                            <RegisterLoginForm 
                                login={this.login}
                                register={this.register}
                            />
                            :
                            null
                            
                        }
                    </div>
                </React.Fragment>
            </div>
        )
    }
}