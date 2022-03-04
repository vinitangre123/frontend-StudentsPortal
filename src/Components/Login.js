import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';


export default class Login extends Component {

    constructor(props) {

        super(props)
        this.state = {


        }




    }

    login() {

        <div>



        </div>

    }




    render() {
        return (
            <div className="App">
                <Form onSubmit={this.saveemployee} classname="form">
                    <h1 className="color:black">Login FORM</h1>
                    <FormGroup>
                        <Label>USERNAME</Label>
                        <Input type="text" name="studentname" />
                    </FormGroup>

                    <FormGroup>
                        <Label>PASSWORD</Label>
                        <Input type="text" name="studentname" />
                    </FormGroup>

                    <Button type="submit" outline color="success" onClick={() => this.login()}>LOGIN</Button>

                </Form>


            </div>
        )
    }
}
