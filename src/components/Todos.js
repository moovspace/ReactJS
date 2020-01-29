import React from 'react';
import TodoItem from './TodoItem'

// PropTypes
import PropTypes from 'prop-types'

class Todos extends React.Component {
	render() {
		console.log(this.props.todos);

		return this.props.todos.map((todo) => (
			<TodoItem key={todo.id} todo={todo} mDone={this.props.mDone} mDelete={this.props.mDelete} />
		));
		// return (
		// 	<div className="todos">
		// 		<h1>Todos</h1>
		// 	</div>
		// );
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

/*
import React, { Component } from 'react';

class Todos extends Component {
	render() {
		return (
			<div className="todos">
				<h1>Todos</h1>
			</div>
		);
	}
}
*/
export default Todos