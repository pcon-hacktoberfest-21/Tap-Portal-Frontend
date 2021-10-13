import React,{useState} from "react";
import {Button,Form} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import'bootstrap/dist/css/bootstrap.css';
import collegeLogo from '../assets/collegeLogo.png';

// component to render forgot password page
function ForgotPassword(){

  //adding useState and useHistory state to component
  const [ForgotPasswordMail,setForgotPasswordMail]=useState("");
  const history=useHistory();    //The useHistory hook allows us to access React Router's history object.We can access and manipulate the current state of the browser history.
    
  //triggered on change of associated field
   function handleChange(event){
      setForgotPasswordMail(event.target.value);
   }  
 
   //triggered on form submittion
   function handleSubmit(event){
     event.preventDefault();
     console.log(ForgotPasswordMail); //console logging the entered email id
     setForgotPasswordMail("");
     history.push('/RetrieveSuccess'); // redirecting to page RetrieveSuccess
   }
 
    return(
       
      // code for forgot password page layout starts
        <div className="bg">
           {/* for collage logo and name */}
            <div className="brand"> 
               <img src={collegeLogo} alt="logo"></img>
               <p className="brand-name">NITJSR Placement Portal</p>
            </div>
            <div className="col-md-4 login">
               <Form onSubmit={handleSubmit}>
                  {/* email id field */}
                  <Form.Group controlId="formBasicEmail">
                     <Form.Label>Forgot your Password! Don't Worry, Retrieve it here..</Form.Label>
                     <Form.Control type="email" required placeholder="Enter email" value={ForgotPasswordMail} onChange={handleChange} style={{color:"black"}} />
                  </Form.Group>
                  {/* submit button of form */}
                  <Button variant="success" size="sm" type="submit">
                  Send me
                  </Button>
                  {/* go back to login page button */}
                  <Button style={{marginLeft:"70%"}} onClick={()=> history.push('/')} variant="success" size="sm"  type="button">
                   back
                  </Button>
                  
                 
              </Form>
           
         </div>
        </div>  
              
        
    );   

}

export default ForgotPassword;
