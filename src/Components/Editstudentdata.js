import axios from 'axios';
import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



import { Button, Form, FormGroup, Label, Input, FormText, Container, Row} from 'reactstrap';



export default class Editstudentdata extends Component {

  constructor(props) {
  
    super(props)
     this.state = {
      id1:this.props.match.params.id,
      studentname: '',
      age: '',
      place: '',
      mobileno: '',
      colleagename: '',
      gender: '',
      pincode: '',
      city: '',
      bankname: '',
       students:[],
     


    }
  



  }
  
  componentDidMount() {
    const base_url_api = "http://localhost:8083/api/sortdata/"+this.state.id1;
    axios.get(base_url_api).then(Response => {
      console.log(Response);
      this.setState({ students: Response.data })

    })
  }



  update=(e) => {
    //alert("123"+this.state.studentname);
    e.preventDefault();
 
    const json={
      id:this.state.id1,
      studentname:this.state.studentname
    }

    //console.log("data in json"+json.value);
      const updateBankUrl="http://localhost:8083/api/update";

    //console.log("bhhhhhhhh"+this.state);
    

    axios.request({
      method: "PUT",
      data: json,
      url: updateBankUrl,
      headers: { "Content-Type": "application/json"},
    }).then(Response => Response)

    toast.success("data is updated!!!");
  }

  changehandler = (e) => {
 this.setState({ [e.target.name]: e.target.value })
    }

  cancel(){
    this.props.history.push("/ListViewCourses");
}

  render() {


    return (
      <div className="App">
      {
      this.state.students.map(user =>

        <Form  onSubmit={this.update} classname="form">
          <h1 className="color:black">STUDENT FORM</h1>
          <FormGroup>
            <Label for="examplePassword">Studentname</Label>
            <Input type="text" name="studentname" 
              defaultValue={user.studentname} onChange={this.changehandler}
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="examplePassword">Age</Label>
            <Input type="text" name="age" 
              defaultValue={user.age} onChange={this.changehandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Place</Label>
            <Input type="text" name="place" 
              defaultValue={user.place}  onChange={this.changehandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">MobileNo</Label>
            <Input type="text" name="mobileno" 
              defaultValue={user.mobileno}  onChange={this.changehandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Colleageame</Label>
            <Input type="text" name="colleagename" 
              defaultValue={user.colleagename}  onChange={this.changehandler}
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
              defaultValue={user.pincode}  onChange={this.changehandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">City</Label>
            <Input type="text" name="city" 
              defaultValue={user.city}  onChange={this.changehandler} />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Bankname</Label>
            <Input type="text" name="bankname" 
              defaultValue={user.bankname}  onChange={this.changehandler}
            />
          </FormGroup>

          <hr />

          <Button type="submit" outline color="success" >update</Button>
          <Button border> <Link style={{color:'white'}} to={`/ListviewCourses`}>cancel</Link></Button>
        </Form>


        )
       }
       </div>





    );
  }
}
