import React from 'react'
import {Card} from 'semantic-ui-react'

export default function SongList(props) {
	const songs = props.songs.map(song => {
		return(
			<Card key={song.id}>
				<Card.Content extra>
					<b>Name</b> {song.song_title}
					<br/>
					<b>Artist</b> {song.artist}
					<br/>
					<b>Album</b> {song.album_title}
					<br/>
					<b>Genre</b> {song.genre}
				</Card.Content>
			</Card>
		)
	})
	return(
		<div className="SongList">
			<Card.Group>
				{songs}
			</Card.Group>
		</div>
	)
}
