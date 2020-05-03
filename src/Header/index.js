import React from 'react'

export default function Header(props) {
	return(
		<p>
			Logged in as {props.username}
        	<span onClick={props.logout}>(Log out)</span>
		</p>
	)
}