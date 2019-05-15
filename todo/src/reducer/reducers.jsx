import { ADD_TASK, TOGGLE_COMPLETED, DELETE_COMPLETED, DELETE_ITEM } from '../action/actions.jsx';

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
		console.log('reducers.jsx says: toggle completed')
			const NewState = state.todo.map(item => ( item.id === action.payload ) ? { ...item, completed: ! item.completed } : item)
			return {
				todo: NewState
			};

		case DELETE_COMPLETED:
		console.log('reducers.jsx says: delete completed')
			const deleteIt = state.todo.filter(item =>(!item.completed))
			return{
				todo: deleteIt,
			}

		case DELETE_ITEM:
		console.log('reducers.jsx says: delete item')
		const deleteOne = state.todo.filter(item => item.id !== action.payload)
		return{
			todo: deleteOne,
		}

			default:
			return state;
	}
}

