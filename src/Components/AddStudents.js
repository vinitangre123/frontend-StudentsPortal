import React from  "react";
import { ThemeProvider } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Students from "../Services/Students";



function AddStudents()
{
  constructor(props)
  {

    super(props)
      this.state= {

        studentname: '',
        age:'',
        place:'',
        mobileno:'',
        colleagename:'',
        pincode:'',
        city:'',
        bankname:''




      }
  }

  saveemployee=(e) =>
  {
    e.preventDefault();
    let employee={studentname:this.state.studentname,age:this.state.age,place:this.state.place,mobileno:this.state.mobileno,
    colleagename:this.state.colleagename,pincode:this.state.pincode,city:this.state.city,bankname:this.state.bankname
 
    }
    Students.addstudents(employee).then( res=>{
        
        this.props.history.push(base_url_save);
    });
  }

return(

<div>
<div className="container,row,card ,form-group,border,mb-3">
<div classname="row">

<div classname="card col-md-6 offset-md-3 offset-md-3">
<div classname="card-body">
<div classname="form-group"></div>
<Form >
<FormGroup>
        <Label for="exampleEmail">Studentname</Label>
        <Input type="text" name="studentname"  placeholder=" Studentname placeholder" 
          value={this.state.studentname}
        />
          </FormGroup>
    

      <FormGroup>
        <Label for="examplePassword">Age</Label>
        <Input type="text" name="age"  placeholder="password placeholder" 
                value={this.state.age}
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Place</Label>
        <Input type="text" name="place"  placeholder="password placeholder" 
                value={this.state.place}
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">MobileNo</Label>
        <Input type="text" name="mobileno"  placeholder="password placeholder" 
                value={this.state.mobileno}
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Colleageame</Label>
        <Input type="text" name="colleagename"  placeholder="password placeholder" 
                value={this.state.colleagename}
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">PinCode</Label>
        <Input type="text" name="pincode" placeholder="password placeholder" 
                value={this.state.pincode}
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">City</Label>
        <Input type="text" name="city"  placeholder="password placeholder"
              value={this.state.city} />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Bankname</Label>
        <Input type="text" name="bankname"  placeholder="password placeholder" 
                value={this.state.bankname}
        />
      </FormGroup>

      <hr/>

      <Button outline color="success">success</Button>
    </Form>

    </div>
    </div>
    </div>
    </div>
     </div>



);
}
export default AddStudents;