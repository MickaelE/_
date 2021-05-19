//src/App.js

import React, {Component} from 'react';
import Registrations from './components/registrations';

class App extends Component {
    state = {
        registrations: []
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/registration/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ registrations: data })
            })
            .catch(console.log)
    }
    render () {
        return (
            <Registrations registrations={this.state.registrations} />
        );
    }
}
export default App;