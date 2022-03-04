import React from "react"; 
import { ListGroup, ListGroupItem} from 'reactstrap';


function Menuns()
{
    return(

<div >

<ListGroup className="list-group-item list-group-item-action">
      <ListGroupItem tag="a" href="/home">Home</ListGroupItem>
      <ListGroupItem tag="a" href="/Addstudentdata">Add students Details</ListGroupItem>
      <ListGroupItem tag="a" href="/ListViewCourses">View Details</ListGroupItem>
      <ListGroupItem tag="a" href="/about">About</ListGroupItem>
      <ListGroupItem tag="a" href="/contactus">Contact us</ListGroupItem>
</ListGroup>

</div>





    );
}

export default Menuns;