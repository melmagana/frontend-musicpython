import React from 'react'

export default function Header(props) {
	return(
		<p>
			LOGGED IN AS {props.username} 
        	<span onClick={props.logout}> (Log out)</span>
		</p>
	)
}