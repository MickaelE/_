import {MDBFooter} from "mdb-react-ui-kit";
import React from "react";
function Footer() {
    return (
        <MDBFooter backgroundcolor='light' className='text-center text-lg-left'>
            <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='https://mickenet.com/'>
                    mickenet.com
                </a>
            </div>
        </MDBFooter>
    );
}
export default Footer;