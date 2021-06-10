import React, {Component} from 'react';
import {
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import HomeComp from "../HomeComp/HomeComp";
import Reg from '../RegForm/RegForm';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

class MenuComp extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <>

                <header>
                    <div
                        className='p-5 text-left bg-image'
                        style={{backgroundImage: "url('https://i.postimg.cc/RVsNK02p/banner.png')", height: 100, opacity:"0.4"}}
                    />
                    <Router><Switch>
                        <Route exact path="/home/" component={HomeComp}/>
                        <Route exact path="/reg/" component={Reg}/>
                    </Switch></Router>
                    <MDBNavbar className="fixed-top" expand='lg' >

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
                                        <MDBNavbarLink aria-current='page' href='/home/'>
                                            Hem
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='#'>Ungdomsidrott</MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/reg/'>Anmälan</MDBNavbarLink>
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

export default MenuComp;