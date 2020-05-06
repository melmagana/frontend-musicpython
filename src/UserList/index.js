import React from 'react'
import './index.css'


export default function UserList(props) {
	console.log(props)
	const users = props.users.map(user => {
		return(
			<div className="User">
				<div key={user.id}>
					<p>@{user.username}</p>
				</div>
			</div>
		)
	})
	return(
		<div className="UserList">
		<h2>All Users of Music Python</h2>
			<div>{users}</div>
		</div>
	)
}
