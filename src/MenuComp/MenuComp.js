import React, {Component} from 'react';
import {MDBContainer, MDBIcon, MDBNavbar, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from "mdb-react-ui-kit";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegForm from "../RegForm/RegForm";
import Home from "../HomeComp/HomeComp";
import '../App.css';

class Menucomp extends Component {
    componentDidMount() {
    }

    render() {
        const bgPink = {backgroundColor: '#e91e63'}
        return (
            <>
                <div
                    className='p-5 text-center bg-image'
                    style={{backgroundImage: "url('https://i.postimg.cc/RVsNK02p/banner.png')", height: 100,opacity:0.5}}
                />

                <Router>
                    <div>
                        <Switch>
                            <Route path="/RegForm/" component={RegForm}/>
                            <Route path="/Home/" component={Home}/>
                        </Switch>
                    </div>
                </Router>
                <header>

                    <MDBNavbar expand="md" scrolling fixed="top">
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
                                        <MDBNavbarLink aria-current='page' href='Home'>
                                            Hem
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='#'>Ungdomsidrott</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/RegForm'>Anmälan</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='#'>Om</MDBNavbarLink>
                                    </MDBNavbarItem>

                                </MDBNavbarNav>
                            </div>
                        </MDBContainer>
                    </MDBNavbar>
                </header>
                </>
                );
                }
                }
                export default Menucomp;
