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

class Header extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <header>
                <div
                    className='p-5 text-left bg-image'
                    style={{
                        backgroundImage: "url('https://i.postimg.cc/RVsNK02p/banner.png')",
                        height: 100,
                        opacity: "0.4"
                    }}
                />
                <MDBNavbar className="fixed-top" expand='lg'>
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
                                    <MDBNavbarLink href='/home/'>
                                        Hem
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/Ungdomar/'>Ungdomsidrott</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/reg/'>Anmälan</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/admin/'>Admin</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/dataTable/'>Rapport</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </MDBContainer>
                </MDBNavbar>
            </header>
        );
    }
}

export default Header;