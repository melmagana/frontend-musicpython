import React, {Component} from 'react'
import MySongList from '../MySongList'

export default class MySongContainer extends Component {
	constructor() {
		super()

		this.state = {
			songs: []
		}
	}
	componentDidMount() {
		this.getSongs()
	}
	getSongs = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/songs/my_songs'
			const songsResponse = await fetch(url, {
				credentials: 'include'
			})
			console.log('songsResponse', songsResponse)
			const songsJson = await songsResponse.json()
			console.log('songsJson', songsJson)

			this.setState({
				songs: songsJson.data
			})

		} catch(err) {
			console.error(err)
		}
	}
	deleteSong = async(idOfSongToDelete) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/songs/' + idOfSongToDelete

		try {
			const deleteSongResponse = await fetch(url, {
				credentials: 'include',
				method: 'DELETE'
			})
			console.log('deleteSongResponse', deleteSongResponse)
			const deleteSongJson = await deleteSongResponse.json()
			console.log('deleteSongJson', deleteSongJson)

			if(deleteSongResponse.status === 200) {
				this.setState({
					songs: this.state.songs.filter(song => song.id !== idOfSongToDelete)
				})
			}

		} catch(err) {
			console.error('Error deleting song')
			console.error(err)
		}
	}
	render(){
		return(
			<div className="MySongContainer">
				<h2>MySongContainer</h2>
				<MySongList 
					songs={this.state.songs}
					deleteSong={this.deleteSong}
				/>
			</div>
		)
	}
}