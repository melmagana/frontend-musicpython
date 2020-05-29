import React from 'react'
import {Card, Button} from 'semantic-ui-react'
import moment from 'moment'
import './index.css'

export default function MySongList(props) {
	const songs = props.songs.map(song => {
		console.log(props.songs)
		return(
			<Card className="Cards" key={song.id}>
				
				<div className="Title">
					{song.song_title}
				</div>
				
				<div className="SongInfo">
					<b>{song.artist}</b> &mdash; {song.album_title}
				</div>
				
				<div className="Genre">
					{song.genre}
				</div>
				
				<div className="SongInfo">
					{moment(song.date_posted).fromNow()}
				</div>
				<Button onClick={() => props.editSong(song.id)}>
					Edit
				</Button>
				<Button onClick={() => props.deleteSong(song.id)}>
					Delete
				</Button>
				
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