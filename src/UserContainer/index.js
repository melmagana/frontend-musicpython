import React, {Component} from 'react'
import UserList from '../UserList'

export default class UserContainer extends Component {
	constructor() {
		super()

		this.state = {
			users: []
		}
	}
	componentDidMount() {
		this.getUsers()
	}
	getUsers = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/users/'
			const usersResponse = await fetch(url, {
				credentials: 'include'
			})
			console.log('usersResponse', usersResponse)
			const usersJson = await usersResponse.json()
			console.log('usersJson', usersJson)

			this.setState({
				users: usersJson
			})

		} catch(err) {
			console.error(err)
		}
	}
	render(){
		return(
			<div className="UserContainer">
				<h2>All Users</h2>
				<UserList users={this.state.users}/>
			</div>
		)
	}
}