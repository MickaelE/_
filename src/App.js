//src/App.js

import React, {Component} from 'react';
import Registrations from './components/registrations';
import { MDBFooter } from 'mdb-react-ui-kit';
import { appendScript } from './utils/appendScript'
class App extends Component {
    state = {
        registrations: []
    }
    componentDidMount() {
        appendScript("header.js");
        fetch('http://localhost:8080/api/registration/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ registrations: data })
            })
            .catch(console.log)
    }
    render () {
        return (
            <div id="parent">
            <MDBContainer>
                <Registrations registrations={this.state.registrations} />
                <MDBBtn>Button</MDBBtn>


            <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://mickenet.com/'>
                        mickenet.com
                    </a>
                </div>
            </MDBFooter>
                </MDBContainer>
    </div>
        );
    }
}

export default App;