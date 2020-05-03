import React, {Component} from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

export default class EditSongModal extends Component {
	constructor(props) {
		super(props)

		console.log('props in constructor in EditSongModal:', props)

		this.state = {
			song_title: props.songToEdit.song_title,
			album_title: props.songToEdit.album_title,
			artist: props.songToEdit.artist,
			genre: props.songToEdit.genre
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.props.updateSong(this.state)
	}
	render() {
		return(
			<Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
				<Header>
					Enter New Song Info
				</Header>
				<Modal.Content>
					<Form onSubmit={this.handleSubmit}>
						<Label>Song Title</Label>
						<Form.Input
							type='text'
							name='song_title'
							value={this.state.song_title}
							placeholder='enter song title'
							onChange={this.handleChange}
						/>
						<Label>Album Title</Label>
						<Form.Input
							type='text'
							name='album_title'
							value={this.state.album_title}
							placeholder='enter album title'
							onChange={this.handleChange}
						/>
						<Label>Artist</Label>
						<Form.Input
							type='text'
							name='artist'
							value={this.state.artist}
							placeholder='enter artist'
							onChange={this.handleChange}
						/>
						<Label>Genre</Label>
						<Form.Input
							type='text'
							name='genre'
							value={this.state.genre}
							placeholder='enter genre'
							onChange={this.handleChange}
						/>
						<Modal.Actions>
							<Button type='Submit'>Update Song</Button>
						</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}