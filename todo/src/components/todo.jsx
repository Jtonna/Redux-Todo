import React from 'react';
import { connect } from 'react-redux';
import { toggleCompletedAction } from '../action/actions';

const mapStateToProps = state => {
	return state;
}

const Todo = props => {
	return(
		<div className="todo">
			<div className="listItem" onClick={() => props.toggleCompletedAction(props.item.id)}>
				<h1> {props.item.name} </h1>
			</div>	
		</div>
	)
}

export default connect(mapStateToProps, {toggleCompletedAction})(Todo)
