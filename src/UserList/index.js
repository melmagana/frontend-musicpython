import React from 'react'
import {Card} from 'semantic-ui-react'

export default function UserList(props) {
	console.log(props)
	const users = props.users.map(user => {
		return(
			<Card key={user.id}>
				<Card.Content>
					<Card.Header>
						{user.username}
					</Card.Header>
				</Card.Content>
			</Card>
		)
	})
	return(
		<div className="UserList">
			<Card.Group>
				{users}
			</Card.Group>
		</div>
	)
}
