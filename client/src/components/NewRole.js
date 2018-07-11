import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Host = styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
height:100vh;
width:100vw;
margin:auto;
border:solid;
display:flex;
border:solid red;
flex-wrap:wrap

`
const Nav = styled.nav`
height:15vh;
width:100vw;
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);`

const Field= styled.textarea`
height:25px;
width:400px;
margin-top:20px;

`
const Form= styled.form`
display:flex;
flex-wrap:wrap;
height:45%;
width:45%;
justify-content:center;
align-items: center;
margin-left:20px;
border:;
background-image: url("https://image.freepik.com/free-photo/cobblestone-walkway-texture_1194-7009.jpg");
`
const AlineCenter=styled.div`
display:flex;
justify-content:center;
align-items: center;
// border:solid;
height:100vh;
width:100vw;
`

class NewRole extends Component {
    
    handleChange = (event) => {
        console.log('hello there')
      
        const inputName = event.target.name
        const userInput = event.target.value
        const newRole = {...this.state}
        console.log(userInput)
        console.log(inputName)

        newRole[inputName] = userInput
        this.setState(newRole)
        // this.setState({ [inputName]: userInput })
    }

    createNewRole = (event) => {
        event.preventDefault()
        axios.post('/api/groups/', { store: this.state }).then((res) => {
            console.log(res.data)

            this.props.history.push(`/stores`)
            this.props.showAll()
        })
    }
    
    
    render() {

       
        return (
            <Host>
                <Nav>  <Link to={'/stores'}> <button> home</button></Link>  </Nav>
                <AlineCenter>
                     <Form onSubmit={this.createNewStore}> 
                    <label for="roles"> Role </label>
                    <input type="text" roles='role' onChange={this.handleChange} /> 
                    <input type="submit" value="Create" onClick={this.createNewRole} />
                </Form> 
                </AlineCenter>
               
            </Host>
        );
    }
}

export default NewRole;