import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-react-ui-kit";

export class LightboxPage extends React.Component {
    state={
        selected:null
    }

    handleSelect = e => this.setState({selected: e.target})

    render(){
        return (
            <MDBDropdown  dropup>
                <MDBDropdownToggle >
                    Lag
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem onclick={this.handleSelect}>Action</MDBDropdownItem>
                    <MDBDropdownItem onclick={this.handleSelect}>Another Action</MDBDropdownItem>
                    <MDBDropdownItem onclick={this.handleSelect}>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider={'true'} />
                    <MDBDropdownItem onclick={this.handleSelect}>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        );
    }};

export default LightboxPage;