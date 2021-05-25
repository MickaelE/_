//src/App.js
// <Registrations registrations={this.state.registrations} />
import React, {Component,useState} from 'react';
import Registrations from './components/registrations';
import { MDBFooter, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
class App extends Component {

    state = {
        registrations: []
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidMount(){
    }
    render () {
        return (

            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBCardBody>
                    <MDBCardTitle>Registrations List</MDBCardTitle>
                    <MDBCardText/>
                    <Registrations registrations={this.state.registrations} />
                    <MDBBtn>Skicka</MDBBtn>

                </MDBCardBody>
                <MDBFooter backgroundcolor='light' className='text-center text-lg-left'>
                    <div className='text-center p-3' style={{ backgroundcolor: 'rgba(0, 0, 0, 0.2)' }}>
                        &copy; {new Date().getFullYear()}{' '}
                        <a className='text-dark' href='https://mickenet.com/'>
                            mickenet.com
                        </a>
                    </div>
                </MDBFooter>
            </MDBCard>
        );
    }
}
export default App;