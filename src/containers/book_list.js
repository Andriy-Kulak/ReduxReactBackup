import React, { Component } from 'react';
import { connect } from 'react-redux'; // we get merging between the two js 

class BookList extends Component {
	//used for looping
	renderList() {
		return this.props.books.map((book) => { // this.prop.books taken from mapStateToProps function
			return (
				<li key={book.title} clssName="list-group-item">{book.title}</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// this function is the glue between react and redux
//books will be available in BookList as 'this.props.books'
// whenever state changes, this container will re-render with new list of books
function mapStateToProps(state) {
	// whatever gets returned from here wil show up as props inside a Book List
	return {
		books: state.books 
	};
}

export default connect(mapStateToProps)(BookList); // connect takes a function and a component and creates a container