import React from 'react'

export default function Logout(props) {
	return(
		<p>
			Logged in as {props.username}
			&nbsp;
        	<span onClick={props.logout}>(Log out)</span>
		</p>
	)
}