import React, {Component} from 'react'
import MySongList from '../MySongList'
import AddSongForm from '../AddSongForm'

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
	createSong = async (songToAdd) => {
		console.log('here is the song you are trying to add')
		console.log(songToAdd)

		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/songs/'
			const createSongResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(songToAdd),
			})
			console.log('createSongResponse', createSongResponse)
			const createSongJson = await createSongResponse.json()
			console.log('createSongJson', createSongJson)

			if(createSongResponse.status === 201) {
				const songs = this.state.songs
				songs.push(createSongJson.data)
				this.setState({
					songs: songs
				})
			}

		} catch(err) {
			console.error('Error trying to add song')
			console.error(err)
		}
	}
	render(){
		return(
			<div className="MySongContainer">
				<h2>MySongContainer</h2>
				<AddSongForm createSong={this.createSong}/>
				<MySongList 
					songs={this.state.songs}
					deleteSong={this.deleteSong}
				/>
			</div>
		)
	}
}