import React from 'react'
import {Card} from 'semantic-ui-react'

export default function MySongList(props) {
	const songs = props.songs.map(song => {
		return(
			<Card key={song.id}>
				<Card.Content extra>
					{song.song_title}
					<br/>
					{song.album_title}
					<br/>
					{song.genre}
					<br/>
					{song.artist}
				</Card.Content>
			</Card>
		)
	})
	return(
		<div className="MySongList">
			<Card.Group>
				{songs}
			</Card.Group>
		</div>
	)
}