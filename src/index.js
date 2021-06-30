import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from "./components/Home";
import Idrott from "./components/Idrott";
import Reg from "./components/RegForm";
import Login from "./Login/login.component";
import DataTableComponent from "./components/Component.DataTableComponent";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";


const routing = (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>
                <PublicRoute exact path="/" component={Home}/>
                <PublicRoute exact path="/Home/" component={Home}/>
                <PublicRoute exact path="/Ungdomar/" component={Idrott}/>
                <PublicRoute exact path="/reg/" component={Reg}/>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="/dataTable/" component={DataTableComponent} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.register();