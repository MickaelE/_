import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './MenuComp/Header';
import Footer from './Footer';
import Home from "./HomeComp/Home";
import Idrott from "./HomeComp/Idrott";
import Reg from "./RegForm/RegForm";
import Login from "./Login/login.component";
import DataTableComponent from "./components/Component.DataTableComponent";

const routing = (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>
                <Route exact path="/Home/" component={Home}/>
                <Route exact path="/Ungdomar/" component={Idrott}/>
                <Route exact path="/reg/" component={Reg}/>
                <Route exact path="/admin/" component={Login}/>
                <Route path="/dataTable/" component={DataTableComponent} />
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