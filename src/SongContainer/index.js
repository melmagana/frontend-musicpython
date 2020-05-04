import React, {Component} from 'react'
import SongList from '../SongList'

export default class SongContainer extends Component {
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
			const url = process.env.REACT_APP_API_URL + '/api/v1/songs/'
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
	render(){
		return(
			<div className="SongContainer">
				<h2>All Songs</h2>
				<SongList songs={this.state.songs}/>
			</div>
		)
	}
}