import React from 'react';
import{Button, Card, CardImg,CardBody,CardTitle,CardSubtitle,CardText} from "reactstrap";



function Header()
{

    return(
<div>
    <Card className="bg-warning">
        
        <CardBody>
      
          <h1 className="text-center my-2">  Welcome To the Student Portal</h1>
          
          </CardBody>
    </Card>
 </div>

    );

    }

    export default Header;