import axios from 'axios';
import React, { useState} from 'react'
import { useHistory } from 'react-router';
import { Form, Card} from 'react-bootstrap'

function AddUser() {
  const[user, setUser] = useState({
      name:'',
      username:'',
      email:'',
      phone:''
  })
  let history = useHistory()

//   const [name, username, email, phone] = user;
  const onInputChange = (e) => {
      console.log(e.value)
      setUser({...user,[e.target.name] : e.target.value})
  }
  const onSubmit = async (e) =>{
      e.preventDefault()
      await axios.post('http://localhost:3001/users',user)

      history.push('/')
  }
    return (
        <>
            <Card style={{ width: '50rem' ,margin:'auto',top:'100px'}}>
              <h2 className = 'm-auto '>Add New User</h2>
                <Form className='m-2 py-3' onSubmit = {(e) => onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formGroupname">
                        <Form.Control 
                        type="name"  
                        placeholder="Enter name"
                        name = "name" 
                        value ={user.name}
                        onChange ={e => onInputChange(e)}    
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupusername">
                        <Form.Control 
                        type="username" 
                        name = 'username'
                        placeholder="Enter username" 
                        value ={user.username}
                        onChange ={e => onInputChange(e)}    
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control 
                        type="email" 
                        name = 'email'
                        placeholder="Enter email" 
                        value ={user.email}
                        onChange ={e => onInputChange(e)}    
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPhone">
                        <Form.Control 
                        type="Phone" 
                        name = 'phone'
                        placeholder="Phone number" 
                        value ={user.phone}
                        onChange ={e => onInputChange(e)}    
                        />
                    </Form.Group>
                    <button className="btn btn-primary btn-block">Add User</button>
                </Form>
            </Card>
        </>
    )
}

export default AddUser
