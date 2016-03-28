import React, { Component } from 'react';
import { connect } from 'react-redux'; // we get merging between the two js 
import { selectBook } from '../actions/index';  //action creator. used in 'mapDispatchToProps' to pass to pass to reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
	// used for looping
	renderList() {
		return this.props.books.map((book) => { // this.prop.books taken from mapStateToProps function
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					clssName="list-group-item">
					{book.title}
				</li>
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
// books will be available in BookList as 'this.props.books'
// whenever state changes, this container will re-render with new list of books
function mapStateToProps(state) {
	// whatever gets returned from here wil show up as props inside a Book List
	return {
		books: state.books 
	};
}


// Anything returned from this function will end up aavailable as props on the BookList container as (this.props.selectBook)
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed to all our reducers
	// the purpose of this is to make sure that anything that selectBook method returns, that it reaches the reducers.
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList); // connect takes a function and a component and creates a container

