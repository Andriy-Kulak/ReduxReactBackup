// All our reducers get combined together by 'combineReducers' method
// For each key in our combineReducers method, we assign a reducer and each one is responsible for creating its own piece of state

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
