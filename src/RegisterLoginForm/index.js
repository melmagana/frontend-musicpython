import React, {Component} from 'react'
import './index.css'

export default class RegisterLoginForm extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			username: '',
			email: '',
			password: '',
			action: 'Login'
		}
	}
	switchForm = () => {
		if(this.state.action === 'Login') {
			this.setState({
				action: 'Create Account'
			})
		} else {
			this.setState({
				action: 'Login'
			})
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		if(this.state.action === 'Create Account') {
			this.props.register(this.state)
		} else {
			this.props.login(this.state)
		}
	}
	render() {
		return(
			<div className="RegisterLoginForm">
				<form onSubmit={this.handleSubmit}>
					<h2>{this.state.action}</h2>
					{
						this.state.action === 'Create Account'
						&&
						<div>
							<div>
								<input
									type='text'
									name='name'
									placeholder='Name'
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</div>
							<div>
								<input
									type='text'
									name='username'
									placeholder='Username'
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					}
					<div>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
							type='password'
							name='password'
							placeholder='Password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<button type='Submit'>
						{this.state.action === 'Login' ? 'Log In' : 'Sign Up'}
					</button>
					{
						this.state.action === 'Login'
						?
						<p>
							Not a member? Sign Up <span onClick={this.switchForm}>Here</span>
						</p>
						:
						<p>
							Already a member? Log In <span onClick={this.switchForm}>Here</span>
						</p>
					}
				</form>
			</div>
		)
	}
}