import React,{ Fragment } from "react";
import { MDBContainer, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import CreateRegistration from './CreateRegistration'
const RegistrationPage = () => {
    function handleSubmit(e) {
        e.preventDefault();
      let post =  new CreateRegistration();

      post.componentDidMount();
        console.log('You clicked submit.');
    }
    return (
        <MDBContainer>
                    <Fragment>
                        <div className="form-group">
                            <MDBInput label="Ditt namn" icon="user" type="text" validate={"true"} error="wrong"
                                      success="right" />
                        </div>
                            <div className="form-group">
                            <MDBInput label="Din email" icon="envelope" type="email" validate={"true"} error="wrong"
                                      success="right" />
                            </div>
                        <div className="form-group">
                            <MDBInput label="emailet en gång till" icon="exclamation-triangle" type="text" validate={"true"}
                                      error="wrong" success="right" />
                        </div>
                        <div className="form-group">
                            <select className="browser-default custom-select">
                                <option>Din åldersgrupp</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <MDBInput label="Din adress" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Ditt telefonnummer" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Storlek på Tröja" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Storlek på shorts" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Storlek på strumpor" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Mammas namn" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Mammas Mobilnr" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Pappas namn" icon="lock" type="password" validate={"true"} />
                        </div>
                        <div className="form-group">
                            <MDBInput label="Pappas Mobilnr" icon="lock" type="tel" validate={"true"} />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary" onClick={handleSubmit}>Skicka</MDBBtn>
                        </div>
                    </Fragment>
        </MDBContainer>
    );
};

export default RegistrationPage;