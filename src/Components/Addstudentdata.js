import axios from 'axios';
import React, { Component } from 'react'
import { toast } from 'react-toastify';



import { Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import Students from "../Services/Students";


export default class Addstudentdata extends Component {

  constructor(props) {

    super(props)
    this.state = {

      studentname: '',
      age: '',
      place: '',
      mobileno: '',
      colleagename: '',
      gender: '',
      pincode: '',
      city: '',
      bankname: '',
      states: [],
      district: [],
      District: ''


    }
    //this.changestudenttnameHander=this.changestudenttnameHander.bind(this);

    //this.saveemployee=this.saveemployee.bind(this);





  }
  /*
  onChange = (e) => {

    e.preventDefault();
    const target = e.target

    const name = target.name

    const value = target.value

    this.setState({ [e.target.name]: e.target.value })
    alert(`${name}${value}`);


  }
  */




  saveemployee = (e) => {
    //const base_url_save="http://localhost:8083/api/savedata";

    e.preventDefault();
    //let employee={studentname:this.state.studentname,
    //age:this.state.age,
    // place:this.state.place,
    //mobileno:this.state.mobileno,
    //colleagename:this.state.colleagename,
    //  pincode:this.state.pincode,
    // city:this.state.city,
    // bankname:this.state.bankname}

    // Students.addstudents(employee).then( res=>{

    ///   this.props.history.push("\savedata");
    // });

    console.log(this.state);

    axios.post('http://localhost:8083/api/savedata', this.state).then(Response => {
      console.log(Response);
      //alert("data is inserted");
     toast.success("Registered Succesfully!!!!")


    })
      .catch(error => {
        console.log(error);
      })

  }
  
   Bystate = e =>
  {
    
    
    const base_url_api = "http://localhost:8083/api/state";
    axios.get(base_url_api).then(Response => {

  
      this.setState({
        
        states: Response.data
      
      });

    })

  }

  ByDistrict = e =>
  {
   
    const base_url_api = "http://localhost:8083/api/district";
    axios.get(base_url_api).then(Response => {

    
      this.setState({
        
        district: Response.data
      
      });

    })




  }
 
  onchangedistrict = District =>(event) => {

    alert(123);

    console.log("value of the event"+event.target.value);
}










  /*changestudenttnameHander=(event) =>{
      this.setState({studentname:event.target.value}

      );
  }

      changeageHander=(event) =>{
          this.setState({age:event.target.value}
  
          );

      
  }
  changeplaceHander=(event) =>{
      this.setState({place:event.target.value}

      );
  }
  changemobilenoHander=(event) =>{
      this.setState({mobileno:event.target.value}

      );
  }

  changecolleagenameHander=(event) =>{
      this.setState({colleagename:event.target.value}

      );
  }
  changepincodeHander=(event) =>{
      this.setState({pincode:event.target.value}

      );
  }
  changecityHander=(event) =>{
      this.setState({city:event.target.value}

      );
  }
  changebanknameHander=(event) =>{
      this.setState({bankname:event.target.value}

      );
  }
  */

  changehandler = e => {
    this.setState({ [e.target.name]: e.target.value })

  }

  render() {

    const { studentname, age, place, mobileno, colleagename, pincode, city, bankname } = this.state
    return (
      <div className="App">

        <Form onSubmit={this.saveemployee} classname="form">
          <h1 className="color:black">STUDENT FORM</h1>

          
          <FormGroup>
            <Label>Studentname</Label>
            <Input type="text" name="studentname" value={studentname} onChange={this.changehandler} />
          </FormGroup>


          <FormGroup>
            <Label for="examplePassword">Age</Label>
            <Input type="text" name="age" 
              value={age} onChange={this.changehandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Place</Label>
            <Input type="text" name="place" 
              value={place} onChange={this.changehandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">MobileNo</Label>
            <Input type="text" name="mobileno" 
              value={mobileno} onChange={this.changehandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Colleageame</Label>
            <Input type="text" name="colleagename" 
              value={colleagename} onChange={this.changehandler}
            />
          </FormGroup>


          <FormGroup>
            <Label for="examplePassword">Gender</Label><br></br>
            <Label><input type="radio" name="gender" value="M" onChange={this.changehandler} />Male</Label><br></br>
            <Label><input type="radio" name="gender" value="F" onChange={this.changehandler} />Female</Label>
          </FormGroup>


          <FormGroup>
            <Label for="examplePassword">PinCode</Label>
            <Input type="text" name="pincode"
              value={pincode} onChange={this.changehandler}
            />
          </FormGroup>

     
           
          <FormGroup>
          <Label for="exampleSelect">States</Label>
           
            <Input type="select" onChange={this.changehandler} name="city" id="exampleSelect" onClick={this.Bystate}  value={city} >
            {
            this.state.states.map(user =>
            <option>{user.state_name}</option>
            )}
              
          </Input>
        </FormGroup>

{/* 
        <FormGroup>
          <Label for="exampleSelect">District</Label>
           
            <Input type="select" onChange={this.changehandler} name="District" id="exampleSelect" onClick={this.ByDistrict}  value={District} >
            {
            this.state.district.map(user =>
            <option>{user.city_name}</option>
            )}
              
          </Input>
        </FormGroup> */}

          <FormGroup>
            <Label for="examplePassword">Bankname</Label>
            <Input type="text" name="bankname" 
              value={bankname} onChange={this.changehandler}
            />
          </FormGroup>

          <hr />

          <Button type="submit" outline color="success">submit</Button>
        </Form>


      </div>





    );
  }
}
