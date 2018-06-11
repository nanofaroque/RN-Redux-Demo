import React, { Component } from 'React';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }

}

// It reads state data and pass as a props to component
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// Connect helps to glue Component from React to Store in Redux
// Connect is a function and returns a function
// immediately called with LibraryList
export default connect(mapStateToProps)(LibraryList);
