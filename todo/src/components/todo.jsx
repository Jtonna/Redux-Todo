import React from 'react';
import { connect } from 'react-redux';
import { toggleCompletedAction, deleteItem } from '../action/actions';
import styled from 'styled-components'


const mapStateToProps = state => {
	return state;
}

const Todo = props => {
	return(
		<TodoDiv>
			<div className='list-item'>
				<h1 classname={props.item.completed ? 'completed': ''} onClick={() => props.toggleCompletedAction(props.item.id)} > {props.item.name} </h1> 
				<button onClick={() => props.deleteItem(props.item.id)} > delete </button>
			</div>
		</TodoDiv>
	)
}

const listItem = styled.div`
	.completed {
		color: red;
		text-decoration: line-through;
	}
`

export default connect(mapStateToProps, {toggleCompletedAction, deleteItem})(Todo)
