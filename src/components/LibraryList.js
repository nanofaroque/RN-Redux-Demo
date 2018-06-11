import React, { Component } from 'React';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    renderRow(library) {
        return <ListItem library={library} />;
    }
    render() {
        console.log(this.props);
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

}

// It reads state data and pass as a props to component.
// in props, this.props.libraries will return all the data
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// Connect helps to glue Component from React to Store in Redux
// Connect is a function and returns a function
// immediately called with LibraryList
export default connect(mapStateToProps)(LibraryList);
