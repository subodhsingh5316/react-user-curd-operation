import React, { useState, useEffect } from 'react'
import { Container,Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [user, setUser] = useState([])

    useEffect(() => {
        
        loadUser()
    }, [])
    const loadUser = async () => {
        const result = await axios.get('http://localhost:3001/users')

        setUser(result.data)
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUser();
      };

    return (
        <div>
            <Container>
                <div className='py-3'>
                    <h1>Home Page</h1>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>S.I</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(( user, index) => (
                                    <tr key = {index}>
                                        <td key={index+1}>{index+1} </td>
                                        <td>{user.name} </td>
                                        <td>{user.username} </td>
                                        <td>{user.email} </td>
                                        <td >
                                            <Link className = 'btn btn-outline-light m-1' to = {`/user/viewuser/${user.id}`}><i className = 'fas fa-eye'></i></Link>
                                            <Link className = 'btn btn-primary m-1' to = {`/user/edituser/${user.id}`} ><i >Edit</i></Link>
                                            <Link className = 'btn btn-outline-danger m-1' to= '' onClick={() => deleteUser(user.id)}><i className = 'fas fa-trash'> </i></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

export default Home
