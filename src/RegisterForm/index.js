import React, {Component} from 'react'

export default class RegisterForm extends Component {
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
						/>
					</div>
					<div>
						<label>username</label>
						<input
							type='username'
							name='username'
							placeholder='enter username'
						/>
					</div>
					<div>
						<label>email</label>
						<input
							type='email'
							name='email'
							placeholder='enter email'
						/>
					</div>
					<div>
						<label>password</label>
						<input
							type='password'
							name='password'
							placeholder='enter password'
						/>
					</div>
					<button>sign up</button>
				</form>
			</div>
		)
	}
}