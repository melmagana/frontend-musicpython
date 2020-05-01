import React, {Component} from 'react'

export default class RegisterForm extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			username: '',
			email: '',
			password: ''
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render() {
		return(
			<div className="RegisterForm">
				<h2>Sign Up</h2>
				<form>
					<div>
						<label>name</label>
						<input
							type='text'
							name='name'
							placeholder='enter name'
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>username</label>
						<input
							type='username'
							name='username'
							placeholder='enter username'
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>email</label>
						<input
							type='email'
							name='email'
							placeholder='enter email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>password</label>
						<input
							type='password'
							name='password'
							placeholder='enter password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<button>sign up</button>
				</form>
			</div>
		)
	}
}