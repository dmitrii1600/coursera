import React, {Component} from 'react';
import {DISHES} from "../shared/dishes";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./HomeComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }

    render() {
        const HomePage = () => (<Home/>)
        return (
            <div>
                <Header/>
               {/* <Menu dishes={this.state.dishes}
                      onClick={(dishId) => this.onDishSelect(dishId)}
                />
                <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
               */}
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={() =>  <Menu dishes={this.state.dishes}/>}/>
                    <Redirect to='/home'/>
                </Switch>
               <Footer/>
            </div>
        );
    }
}

export default Main;
