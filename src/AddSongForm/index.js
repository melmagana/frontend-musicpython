import React, {Component} from 'react'
import {Form, Button, Label, Segment} from 'semantic-ui-react'

export default class AddSongForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			song_title: '',
			album_title: '',
			artist: '',
			genre: ''
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()

		this.props.createSong(this.state)
		this.setState({
			song_title: '',
			album_title: '',
			artist: '',
			genre: ''
		})
	}
	render() {
		return(
			<Segment>
				<h3>Add A Song</h3>
				<Form size="small" onSubmit={this.handleSubmit}>
					<Label>Song Title</Label>
					<Form.Input
						type='text'
						name='song_title'
						value={this.state.song_title}
						placeholder='Enter song title'
						onChange={this.handleChange}
					/>
					<Label>Album Title</Label>
					<Form.Input
						type='text'
						name='album_title'
						value={this.state.album_title}
						placeholder='Enter album title'
						onChange={this.handleChange}
					/>
					<Label>Artist Name</Label>
					<Form.Input
						type='text'
						name='artist'
						value={this.state.artist}
						placeholder='Enter artist name'
						onChange={this.handleChange}
					/>
					<Label>Genre</Label>
					<Form.Input
						type='text'
						name='genre'
						value={this.state.genre}
						placeholder='Enter artist name'
						onChange={this.handleChange}
					/>
					<Button type="Submit">Add Song</Button>
				</Form>
			</Segment>
		)
	}
}