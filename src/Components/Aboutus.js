import React, { Component } from 'react'
import axios from 'axios';
import { Label } from 'reactstrap';
import { Link } from 'react-router-dom';



export default class Aboutus extends Component {

  constructor(props) {
    super(props)

    this.state = {

     
      students: [],
      fields: {},



    }
  }


  changehandler = e => {
    // this.setState({ [e.target.name]: e.target.value })

    let fields = this.state.fields;

    //alert(fields);
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }




  submitSearchButton = () => {

    
    const base_url_api = "http://localhost:8083/api/sortdata/"+this.state.fields.id1
   axios.get(base_url_api).then(Response => {
    
     console.log("fsffsdffdf"+Response);
      this.setState({ students: Response.data })
   


    }).catch(error => {
      console.log(error);
    })
 
    

  };



  render() {

    const { students, id1 } = this.state;


    return (
      <div>

        <input type="text"  placeholder="Searching........" name="id1" value={id1} ref="id1" onChange={this.changehandler} ></input>
        <button type="submit" outline color="success" onClick={this.submitSearchButton} >Search</button>

        {/* <Link to={{ pathname: "/edit", state: { item: this.state.name } }} style={{ color: "black" }}>Edit Profile</Link></div> */}
       
        {
          students.map(post => 
          <div  style={{color:"red",fontSize:'160%',border:'1px solid black'}}>
         <card>
          <div><h4><b>Studentname:</b></h4>{post.studentname} </div>
          <div><h4><b>Age:</b></h4>{post.age} </div>
          <div><h4><b>Bankname:</b></h4>{post.bankname} </div>
          <div><h4><b>MobileNo:</b></h4>{post.mobileno} </div>
          <div><h4><b>Colleageame:</b></h4>{post.colleagename} </div>
          <div><h4><b>PinCode:</b></h4>{post.pincode} </div>
          </card>

          
          </div>
          
          
          )

        }


      </div>
    )
  }
}
