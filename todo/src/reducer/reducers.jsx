import { ADD_TASK, TOGGLE_COMPLETED } from '../action/actions.jsx';

const initialState = {
	todo: [{
		name: 'test name',
		id: Date.now(),
		completed: false,
	}, {
		name: 'secondary test',
		id: Date.now() + 4397,
		completed: false,
	},]
}

export default (state = initialState, action) => {
	switch (action.type){
		case ADD_TASK:
		return {
			...state,
				todo: [
					...state, {
						name: action.payload,
						id: Date.now(),
						completed: false,
					}
				]
		}
		case TOGGLE_COMPLETED:
			const NewState = state.todo.map(item => ( item.id === action.payload ) ? { ...item, completed: ! item.completed } : item)
			return {
				todo: NewState
			};
			default:
			return state;
	}
}

