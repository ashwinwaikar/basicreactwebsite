import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
// import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* we use switch because multiple pages mese koi ekhi page dikhana hai jiska path sabse pahile match hojata hai browser ke url ke sath*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route component={ErrorPage} /> */}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
