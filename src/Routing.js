import React, { Component } from 'react'
import { BrowserRouter ,Switch} from 'react-router-dom'
import Aboutus from './Components/Aboutus'
import Addstudentdata from './Components/Addstudentdata'
import Contactus from './Components/Contactus'
import Editstudentdata from './Components/Editstudentdata'
import Home from './Components/Home'
import ListViewCourses from './Components/ListViewCourses'
import Login from './Components/Login'
import Menuns from './Components/Menus'

export default class Routing extends Component {
    render() {
        return (
            <div>

            
 <BrowserRouter>
 <Menuns>
    <Route path="/menus" component={Menuns} exact />
    <Route path="/" component={Login} exact />
    <Route path="/home" component={Home} exact />
    <Route path="/Addstudentdata" component={Addstudentdata} exact />
    <Route path="/ListviewCourses" component={ListViewCourses} exact />
    <Route path="/about" component={Aboutus} exact />
    <Route path="/contactus" component={Contactus} exact />
    <Route path="/edit/:id" component={Editstudentdata} exact />
    <Route path="/ListviewCourses/:id" component={ListViewCourses} exact />
   </Menuns>
  </BrowserRouter>



            </div>
        )
    }
}
