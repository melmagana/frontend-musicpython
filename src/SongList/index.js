import React from 'react'

export default function SongList(props) {
	const songsLi = props.songs.map(song => {
		return(
			<li key={song.id}>{song.song_title}</li>
		)
	})
	return(
		<div className="SongList">
			<ul>{songsLi}</ul>
		</div>
	)
}
