import React, {Component} from 'react'

export default class RegisterForm extends Component {
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
				action: 'Register'
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
		if(this.state.action === 'Register') {
			this.props.register(this.state)
		} else {
			this.props.login(this.state)
		}
	}
	render() {
		return(
			<div className="RegisterForm">
				<h2>{this.state.action}</h2>
				<form onSubmit={this.handleSubmit}>
					{
						this.state.action === 'Register'
						&&
						<div>
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
									type='text'
									name='username'
									placeholder='enter username'
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					}
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
							placeholder='enter email'
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<button type='Submit'>
						{this.state.action === 'Login' ? 'Log In' : 'Sign Up'}
					</button>
				</form>
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
			</div>
		)
	}
}