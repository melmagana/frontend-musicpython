import React, {Component} from 'react'
import MySongList from '../MySongList'
import AddSongForm from '../AddSongForm'
import EditSongModal from '../EditSongModal'

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
	editSong = (idOfSongToEdit) => {
		console.log('id of song to edit:', idOfSongToEdit)
		this.setState({
			idOfSongToEdit: idOfSongToEdit
		})
	}
	updateSong = async (updateSongInfo) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/songs/' + this.state.idOfSongToEdit

		try {
			const updateSongResponse = await fetch(url, {
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(updateSongInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('updateSongResponse', updateSongResponse)
			const updateSongJson = updateSongResponse.json()
			console.log('updateSongJson',updateSongJson)

			if(updateSongResponse.status === 200) {
				const songs = this.state.songs
				const indexOfSongBeingUpdated = songs.findIndex(song => song.id === this.state.idOfSongToEdit)
				songs[indexOfSongBeingUpdated] = updateSongJson.data
				this.setState({
					songs: songs,
					idOfSongToEdit: -1
				})
			}

		} catch(err) {
			console.error('error updating song')
			console.error(err)
		}
	}
	closeModal = () => {
		this.setState({
			idOfSongToEdit: -1
		})
	}
	render(){
		return(
			<div className="MySongContainer">
				<h2>MySongContainer</h2>
				<AddSongForm createSong={this.createSong}/>
				<MySongList 
					songs={this.state.songs}
					deleteSong={this.deleteSong}
					editSong={this.editSong}
				/>
				{
					this.state.idOfSongToEdit > -1
					?
					<EditSongModal
						key={this.state.idOfSongToEdit}
						songToEdit={this.state.songs.find((song) => song.id === this.state.idOfSongToEdit)}
						updateSong={this.updateSong}
						closeModal={this.closeModal}
					/>
					:
					null
				}
			</div>
		)
	}
}