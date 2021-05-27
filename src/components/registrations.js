import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBSelect } from 'mdb-react-ui-kit';

const RegistrationPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>

                        <div className="grey-text">
                            <MDBInput label="Ditt namn" icon="user" group type="text" validate error="wrong"
                                      success="right" />
                            <MDBInput label="Din email" icon="envelope" group type="email" validate error="wrong"
                                      success="right" />
                            <MDBInput label="emailet en gång till" icon="exclamation-triangle" group type="text" validate
                                      error="wrong" success="right" />
                            <select className="browser-default custom-select">
                                <option>Din åldersgrupp</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <MDBInput label="Din adress" icon="lock" group type="password" validate />
                            <MDBInput label="Ditt telefonnummer" icon="lock" group type="password" validate />
                            <MDBInput label="Storlek på Tröja" icon="lock" group type="password" validate />
                            <MDBInput label="Storlek på shorts" icon="lock" group type="password" validate />
                            <MDBInput label="Storlek på strumpor" icon="lock" group type="password" validate />
                            <MDBInput label="Mammas namn" icon="lock" group type="password" validate />
                            <MDBInput label="Mammas Mobilnr" icon="lock" group type="password" validate />
                            <MDBInput label="Pappas namn" icon="lock" group type="password" validate />
                            <MDBInput label="Pappas Mobilnr" icon="lock" group type="tel" validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary">Register</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default RegistrationPage;