import {useReducer} from "react";

const FORM_ACTION = {
	setName: 'setName',
	setText: 'setText',
	setRating: 'setRating'
}

// @ts-ignore
const reducer = (state, action) => {
	switch (action?.type) {
		case FORM_ACTION.setName:
			return {name: action.payload.name, text: '', rating: 0};
		case FORM_ACTION.setText:
			return {...state, text: action.payload.text};
		case FORM_ACTION.setRating:
			return {...state, rating: action.payload.rating};
		default:
			return state;
	}
}

const action = {

}

export const NewReviewForm = () => {
	const initialState = {
		name: 'Test',
		text: 'text',
		rating: 10
	}
	
	// @ts-ignore
	const onNameChange = (event) => dispatch(
		{type: FORM_ACTION.setName, payload: {name: event.target.value}}
	)
	
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<div>
			<label>
				Name:
				<input
					value={state.name}
					onChange={onNameChange}
					type="text"/>
			</label>
			<label>
				Text:
				<input type="text"/>
			</label>
			<label>
				Rating:
				<input type="number"/>
			</label>
		</div>
	)
}