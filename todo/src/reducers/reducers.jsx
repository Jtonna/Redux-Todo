import { } from '../action/actions.jsx'

const initialState = {
	todo: [{
		name: 'test'
	}]
};

export default (state = initialState, action) => {
	switch (action.type){
		case typeName:
			return{ ...state };

		default:
			return state;
	}
}
