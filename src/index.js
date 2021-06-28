import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from "./components/Home";
import Idrott from "./components/Idrott";
import Reg from "./components/RegForm";
import Login from "./Login/login.component";
import DataTableComponent from "./components/Component.DataTableComponent";
import ProtectedRoute from "./Login/ProtectedRoute";

const routing = (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/Home/" component={Home}/>
                <Route exact path="/Ungdomar/" component={Idrott}/>
                <Route exact path="/reg/" component={Reg}/>
                <ProtectedRoute path="/admin/" component={Login}/>
                <ProtectedRoute path="/dataTable/" component={DataTableComponent} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();