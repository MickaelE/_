//src/App.js
// <Registrations registrations={this.state.registrations} />
import React, {Component} from 'react';
import Menu from './MenuComp/MenuComp';
import Footer from './Footer';

class App extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Menu/>
                <Footer/>
            </>
        );
    }
}

export default App;