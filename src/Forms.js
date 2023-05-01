import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


function Forms() {
    const[mail, setMail] = useState('')
    const [password, setPassword]= useState('')
    const [submitted, setSubmitted]= useState(false)
    const mailHandlder=(e)=>{
        setMail(e.target.value)
        
    }
    const passWordHandler=(e)=>{
        setPassword(e.target.value)
        
    }
     const formHandler =(e)=>{
        if(mail && password){
            setSubmitted(true)
            setMail('')
            setPassword('')   
        }
        else alert(' all fields are required')
         e.preventDefault()
        

     } 
    
  return (
    <React.Fragment >
        <Form className='formStyling' onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={mail} onChange={mailHandlder} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={passWordHandler} />
      </Form.Group>
     
      <Button  variant="light" type="submit">
        Submit
      </Button>
    </Form>
    </ React.Fragment>
  )
}

export default Forms