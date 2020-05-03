import React from 'react'
import {Card, Button} from 'semantic-ui-react'

export default function MySongList(props) {
	const songs = props.songs.map(song => {
		console.log(props.songs)
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
					<br/>
					{song.date_posted}
					<Button onClick={() => props.editSong(song.id)}>
					Edit
					</Button>
					<Button onClick={() => props.deleteSong(song.id)}>
					Delete
					</Button>
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