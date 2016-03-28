export function selectBook(book) {
	// selectBookis an ActionCreator, it needs to return an action, an action with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}