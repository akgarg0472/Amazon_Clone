import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {auth} from "./firebase";

import "./App.css";

const promise = loadStripe(
    "pk_test_51JLsDoSDvfKKCsnvThL8gdnFlw2znBQsyPYxMm4n45GLysc1Rz47uj8CvF7m1RB1jAqbdC1jHnGi1swWXV4oyPdd00amGRS7SW"
);

function App() {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authenticatedUser) => {
            if (authenticatedUser) {
                dispatch({
                    type: "SET_USER",
                    user: authenticatedUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <div className="app">
            <Switch>
                <Route path="/" exact>
                    <Header/>
                    <Home/>
                    <Footer/>
                </Route>

                <Route path="/checkout">
                    <Header/>
                    <Checkout/>
                    <Footer/>
                </Route>

                <Route path="/login">
                    <Login/>
                    <Footer/>
                </Route>

                <Route path="/payment">
                    <Header/>
                    <Elements stripe={promise}>
                        <Payment/>
                    </Elements>
                    <Footer/>
                </Route>

                <Route path="/orders">
                    <Header/>
                    <Orders/>
                    <Footer/>
                </Route>

                <Route path="/product/:id/:title/:rating/:price/:image">
                    <Header/>
                    <ProductDetail/>
                    <Footer/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
