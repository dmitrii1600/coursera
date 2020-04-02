import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
