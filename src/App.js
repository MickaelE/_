//src/App.js
// <Registrations registrations={this.state.registrations} />
import React, {Component} from 'react';
import RegistrationPage from './components/registrations';
import { MDBIcon,
    MDBNavbarNav,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardBody,
    MDBCardTitle,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCardText,
    MDBNavbar,
    MDBContainer,
    MDBNavbarToggler} from 'mdb-react-ui-kit';
class App extends Component {
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidMount(){

    }
    render () {
        return (
            <>
                <header>
                <MDBNavbar expand='lg' light bgColor='white'>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            aria-controls='navbarExample01'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <MDBIcon fas icon='bars' />
                        </MDBNavbarToggler>
                        <div className='collapse navbar-collapse' id='navbarExample01'>
                            <MDBNavbarNav right className='mb-2 mb-lg-0'>
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='#'>
                                        Hem
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Ungdomsidrott</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Anmälan</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Om</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </MDBContainer>
                </MDBNavbar>
                    <div
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "url('http://localhost:3000/static/media/banner.bbb41d2e.png')", height: 100 }}
                    />

            </header>
                <MDBRow>
                    <MDBCol size='4' className='col-text' />
                    <MDBCol size='4' className='col-form'>
                <MDBCard border="secondary" alignment='center' style={{ maxWidth: '22rem' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Registrera dig.</MDBCardTitle>
                        <MDBCardText alignment='center'>
                            <RegistrationPage />
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
           </>
        );
    }
}
export default App;