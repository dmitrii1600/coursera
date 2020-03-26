import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "reactstrap/es/Navbar";
import {NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent";

class App extends Component {
    render() {
        return (
            <div >
                <Navbar dark color='primary'>
                    <div className='container'>
                        <NavbarBrand href='#'> Nav Bar Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu/>
            </div>
        );
    }
}

export default App;
