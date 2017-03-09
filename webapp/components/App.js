import React, { Component, PropTypes } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';
import Header from './Header';
import Builder from './Builder';
import PartsContainer from './Parts';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Builder />
                <PartsContainer partStore={this.props.partStore}/>
                <DevTools />
            </div>
        );
    }
}

App.propTypes = {
    partStore: PropTypes.object
};

export default App;
