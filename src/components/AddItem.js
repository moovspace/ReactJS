import React from 'react';

// PropTypes
// import PropTypes from 'prop-types'

class AddItem extends React.Component {
	state = {
		title: '',
		name: '',
		email: ''
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.mAddItem(this.state.title);
		this.setState({title: ''});
	}

	onChange = (e) => this.setState({title: e.target.value})

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
				<input 
					value={this.state.title}
					onChange={this.onChange}
					type="text"
					name="title"
					placeholder="Add item ..." 
					className="inputText"
					style={{ flex: '8' }} />
				<input 
					type="submit"
					value="Submit"
					className="btnSubmit" 
					style={{ flex: '2', cursor: 'pointer' }} />
			</form>
		)
	}
}

export default AddItem