//src/App.js
// <Registrations registrations={this.state.registrations} />
import React, {Component} from 'react';
import Menu from './MenuComp/MenuComp';
import {MDBFooter} from 'mdb-react-ui-kit';

class App extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
            <Menu/>



                <MDBFooter backgroundcolor='light' className='text-center text-lg-left'>
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