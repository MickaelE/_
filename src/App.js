//src/App.js
// <Registrations registrations={this.state.registrations} />
import React, {Component, useEffect, useState} from 'react';
import RegistrationPage from './components/registrations';
import menu from './components/hamburgerMenuPage';
import { mdbreact,MDBFooter,MDBCardImage,MDBRipple, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
class App extends Component {
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidMount(){

    }
    render () {
        return (

            <MDBCard style={{ maxWidth: '50rem' }}>
                <menu />
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg' fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>Registrera dig.</MDBCardTitle>
                    <MDBCardText>
                        <RegistrationPage />
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        );
    }
}
export default App;