// State arugment is not application state
// It is only the state this reducer is responsible for
// if state is not defined, it will be null

export default function ActiveBook(state = null, action) { 
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}



	return state;
}
