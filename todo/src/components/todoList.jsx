import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo.jsx'

const mapStateToProps = ( state ) => {
	return state;
}

const TodoList = (props) => {

	return(
		<div className="todoListContainer">
			{props.todo.map(
				item => (
					<Todo key={item.id} item={item} />
				)
			)}
		</div>
	)
}

export default connect (mapStateToProps)(TodoList)
