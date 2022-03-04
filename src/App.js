import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from "./Components/Header";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Col, Container, Row } from "reactstrap";


import Menuns from './Components/Menus';
import { BrowserRouter, Route, route } from "react-router-dom";
import Home from './Components/Home';


import Contactus from './Components/Contactus';
import ListViewCourses from './Components/ListViewCourses';
import Addstudentdata from './Components/Addstudentdata';
import Aboutus from './Components/Aboutus';
import Editstudentdata from './Components/Editstudentdata';
import Login from './Components/Login';
import ReactPaginate from 'react-paginate';




function App() {

  const notify = () => toast.success("done");
  return (

    <div>

      <BrowserRouter>
        <ToastContainer />

        <Container>
          <Header />
          <Row>
            <Col md={2}>

              <Menuns />
            </Col>

            <Col md={8}>
              <Route path="/menus" component={Menuns} exact />
              <Route path="/home" component={Home} exact />
 
              <Route path="/Addstudentdata" component={Addstudentdata} exact />
              <Route path="/ListviewCourses" component={ListViewCourses} exact />
              <Route path="/about" component={Aboutus} exact />
              <Route path="/contactus" component={Contactus} exact />
              <Route path="/edit/:id" component={Editstudentdata} exact />
              <Route path="/ListviewCourses/:id" component={ListViewCourses} exact />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>

  );
}

export default App;
