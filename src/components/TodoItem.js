import React from 'react';

// PropTypes (required props params)
import PropTypes from 'prop-types'

class TodoItem extends React.Component {	
	constructor(props) {
		super(props); // Set props on parent React.Component
		this.state = {date: new Date()}; // Add date state to props
		
		// In constructor
		// this.handleClick = this.handleClick.bind(this);
		// Or in button
		// <button onClick={this.handleClick.bind(this)}>
		// Auto dowiązanie this do metody
		// handleClick = () => { console.log('this ma wartość:', this); }
		// <button onClick={(e) => this.handleClick(e)}>
	}

	// On mount
	componentDidMount() {
		// Change timer every second
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	// On unmount
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// Change timer every second
	tick() {
		this.setState({
			date: new Date()
		});
	}

	getStyle = () => {
		return {
			marginBottom: "5px",
			padding: "15px",
			color: "#fff",
			backgroundColor: "#42b985",
			borderRadius: "5px",
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	state = {
		hover: false
	}

	toggleHover = () => {
		// Zmien stan state
		this.setState({hover: !this.state.hover})
	}

	render() {
		var linkStyle

		if (this.state.hover) {
			linkStyle = btnStyle
		} else {
			linkStyle = btnStyleHover
		}

		const { id, title } = this.props.todo;
		return (
			<div style={ this.getStyle() }>
				<p style={{ margin: "0px" }}>
					<input type="checkbox" onChange={this.props.mDone.bind(this, id)} /> {' '}
					{ title }
					<div class="time"> {this.state.date.toLocaleTimeString()} </div>
					<button style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.props.mDelete.bind(this, id)}>X</button>
				</p>
			</div>
		)
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	mDone: PropTypes.func.isRequired,
	mDelete: PropTypes.func.isRequired
}

// Default value for props
TodoItem.defaultProps = {
  color: 'platinum'
};

const btnStyle = {
	backgroundColor: "#f44",
	borderRadius: "5px",
	color: "#fff",
	padding: "5px 8px",
	cursor: "pointer",
	border: "none",
	float: "right",
	transition: 'all .5s'

	// '&:hover': {
 //      backgroundColor: "#000"
 //    }
}

const btnStyleHover = {
	backgroundColor: "#339977",
	borderRadius: "5px",
	color: "#fff",
	padding: "5px 8px",
	cursor: "pointer",
	border: "none",
	float: "right",
	transition: 'all .9s'
}

export default TodoItem

// Style
// <div style={ itemStyle }>
// const itemStyle = {
// 	backgroundColor: '#eee',
// 	float: "left",
// 	padding: "5px",
// 	margin: "5px",
// }

// Inline Style
// <div style={{ backgroundColor: '#eee' }}>

// Bind param to method: bind(this)
// setDone(e) {
// 	console.log(this.props);
// }
// <input type="checkbox" onChange={this.setDone.bind(this)} /> {' '}

// Or withou bind(this)
// setDone = (e) => {
// 	console.log(this.props);
// }


// Style function regetStyle()
// if(this.props.todo.completed){
// 	return {
// 		textDecoration: 'line-through'
// 	}
// }else{
// 	return {
// 		textDecoration: 'none'
// 	}
// }

// Warunkowy Componentfunction WarningBanner(props) {
// if (!props.warn) {
//     return null;
//   }
//   return (
//     <div className="warning">
//       Ostrzeżenie!
//     </div>
//   );
// }

// List Component\
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }