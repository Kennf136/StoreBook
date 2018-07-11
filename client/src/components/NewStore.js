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


class NewStore extends Component {
    state = {
        store: {},
        name:"",
        location:"",
        inventory:"",
        number:"",
        salesGoal:"",
        managerNotes:"",
        description:"",

        // handleChange = this.handleChange.bind(this),
        // createNewStore = this.handleSubmit.bind(this)

    }

   
    handleChange = (event) => {
        console.log('hello there')
      
        const inputName = event.target.name
        const userInput = event.target.value
        const newsto = {...this.state}
        console.log(userInput)
        console.log(inputName)

        newsto[inputName] = userInput
        this.setState(newsto)
        // this.setState({ [inputName]: userInput })
    }

    createNewStore = (event) => {
        event.preventDefault()
        axios.post('/api/stores', { store: this.state }).then((res) => {
            console.log(res.data)

            this.props.history.push(`/stores`)
            this.props.showAll()
        })
    }

    render() {

        return (
            <Host>
                <Nav>
                    <h1>Create A new work space; Coming soon: Hours Of Opp</h1>
                    <Link to={'/stores'}> <button> home</button></Link>
                </Nav>
               
                    <AlineCenter>
                     <Form  onSubmit={this.createNewStore}>
                    <div> <label for="name">Name</label>
                    <input type="text" name="name" onChange={this.handleChange} />

                    <label for="location">location</label>
                    <input type="text" name="location" onChange={this.handleChange} />  
                    
                    <label for="number">number</label>
                    <input type="text" name="number" onChange={this.handleChange} />

                     </div>

                   
                    <div> <label for="inventory">inventory</label>
                    <input type="text" name="inventory" onChange={this.handleChange} />

                    
                    <label for="salesGoal">salesGoal</label>
                    <input type="text" name="salesGoal" onChange={this.handleChange} />
                             </div>
                    <div> 
                     <label for="managerNotes">managerNotes</label>
                    <Field type="text" name="managerNotes" onChange={this.handleChange} />
                    </div>

                   <div>  <label for="description">description</label>
                    <Field type="text" name="description" onChange={this.handleChange} />
                     </div>
                   

                    <div> <input type="submit" value="Create" onClick={this.createNewStore} /> </div>
                   </Form>
                </AlineCenter>
             

            </Host>
        );
    }
}

export default NewStore;