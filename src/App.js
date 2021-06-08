//src/App.js
// <Registrations registrations={this.state.registrations} />
import React, {Component} from 'react';
import RegForm from './RegForm/RegForm'
import MyWindowPortal from './MyWindowPortal'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBTypography,
    MDBFooter
} from 'mdb-react-ui-kit';
import {MDBBtn} from "mdbreact";

class App extends Component {

    toggleWindowPortal() {
        this.setState(state => ({
            ...state,
            showWindowPortal: !state.showWindowPortal,
        }));
    }
    closeWindowPortal() {
        this.setState({ showWindowPortal: false })
    }

    componentDidMount() {

    }

    render() {
        return (

            <>
                <header>
                    <MDBNavbar expand='lg' light bgColor='white'>
                        <MDBContainer fluid>
                            <MDBNavbarToggler
                                aria-controls='navbarExample01'
                                aria-expanded='false'
                                aria-label='Toggle navigation'>
                                <MDBIcon fas icon='bars'/>
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
                                        <MDBNavbarLink href='/components/CreateRegistration'>Anmälan</MDBNavbarLink>
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
                        style={{backgroundImage: "url('https://i.postimg.cc/RVsNK02p/banner.png')", height: 100}}
                    />
                </header>
                <MDBContainer>
                <MDBRow>
                    <MDBCol size='0.1' className='col-text' />
                    <MDBCol size='8' className='col-text'>
                        <MDBTypography variant='h5'>Medlems och träningsavgifter 2021</MDBTypography>
                        <MDBTable small align="middle">
                            <MDBTableHead>
                                <th scope='col'>#</th>
                                <th scope='col'>13-19 år
                                    (9/11-mannafotboll)</th>
                                <th scope='col'> 10—12 år
                                    (7-manna fotboll)</th>
                                <th scope='col'> 8 — 9 år
                                    (5-manna fotboll)</th>
                                <th scope='col'>6 — 7 år
                                    (3-manna fotboll)</th>
                                <th scope='col'>4-5 år
                                    (Boll o Lek)</th>
                                <th scope='col'>Funktionsvariationer
                                    (aktiviteter)</th>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>250kr + 1050kr = 1300kr</td>
                                    <td>250kr + 850kr = 1100kr</td>
                                    <td>250kr + 700kr = 950kr</td>
                                    <td>250kr + 400kr = 650kr</td>
                                    <td>400kr</td>
                                    <td>400kr</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                        <MDBTypography note noteColor='primary'>
                        Exkl. lottförsäljning.
                        Börjar man i föreningen innan den 30/6 betalas full medlems- och träningsavgift.
                        Börjar man efter 30/6 så betalar man full medlemsavgift men halv träningsavgift t.o.m. 30/9.
                        Efter den 1/10 betalar man bara medlemsavgiften.
                        </MDBTypography>
                        <MDBTypography variant='h6'>Vad ingår i medlems och träningsavgiften?</MDBTypography>
                        <MDBTypography listUnStyled className='mb-0'>
                            <ul>
                                <li>Folksams idrottsförsäkring.</li>
                                <li>Träning 1-3 ggr/vecka med utbildade ledare.</li>
                                <li> Seriespel med utbildade domare, för 9-19 åringar.</li>
                                <li> Cupspel 2-6 ggr per år, för 6-19 åringar.</li>
                                <li>Träningsset (tröja, shorts, strumpor) ingår i full medlems- och träningsavgift för 6-16
                                    åringar</li>
                                <li>Tröja/shorts storlekar: 110/120, 130/140, 150/160, S, M, L, XL</li>
                                <li> Strumpor storlekar: 31-33, 34-36, 37-39, 40-42, 43-45</li>
                                <li>Verksamhetsanpassad utrustning för sin åldersgrupp.</li>
                                <li>Säsongsavslutning med priser/medaljer.</li>
                        </ul>
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol size='4' className='col-form'>
                        <MDBCard border="secondary" alignment='center' style={{maxWidth: '22rem'}}>
                            <MDBCardBody>
                                <MDBCardText alignment='center'>
                                  <RegForm />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                    </MDBContainer>
                <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <a className='text-dark' href='https://mickenet.com/'>
                            mickenet.com
                        </a>
                    </div>
                </MDBFooter>
            </>
        );
    }
}

export default App;