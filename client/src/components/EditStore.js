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
border:dubble;
background-image: url("https://image.freepik.com/free-photo/cobblestone-walkway-texture_1194-7009.jpg");
`
const AlineCenter=styled.div`
display:flex;
justify-content:center;
align-items: center;
border:solid;
height:100vh;
width:100vw;
`
class EditStore extends Component {

    state = {
        store: {}
    }

    componentDidMount() {
        const storeId = this.props.match.params.storeId

        axios.get(`/api/stores/${storeId}`)
            .then((res) => {
              const  store = res.data
                this.setState({
                    store
                })
            })
            .catch((err) => {
                console.error(err)
            })

    }

    handleChange = (event) => {
        console.log('hello there')

        const inputName = event.target.name
        const userInput = event.target.value
        const store = { ...this.state.store }
        console.log(userInput)
        console.log(inputName)

        store[inputName] = userInput
        this.setState({store})
    }

    editStore = (event) => {
        event.preventDefault()
        axios.put(`/api/stores/${this.props.match.params.storeId}`, { store: this.state.store }).then((res) => {
            console.log(res.data)

            this.props.history.push(`/stores/${this.props.match.params.storeId}`)
            this.props.showAll()
        })
    }

    render() {




        return (
            <Host>
                <Nav>
                    <h1>Hello From StorePage</h1>
                    <div>  <Link to={'/stores'}> <button> home</button></Link> </div>
                </Nav>
                <AlineCenter>
                <Form >
<div>  <label for="name">Name</label>
                    <input type="text" name="name" value={this.state.store.name} onChange={this.handleChange} />

                    <label for="location">location</label>
                    <input type="text" name="location" value={this.state.store.location} onChange={this.handleChange} />  <label for="number">number</label>
                    <input type="text" name="number"  value={this.state.store.number} onChange={this.handleChange} />  </div>
                   
                   <div>   <label for="inventory">inventory</label>
                    <input type="text" name="inventory" value={this.state.store.inventory} onChange={this.handleChange} /><label for="salesGoal">salesGoal</label>
                    <input type="text" name="salesGoal"  vale={this.state.store.salesGoal} onChange={this.handleChange} />

                    </div>

                   <div>  

                    <label for="managerNotes">managerNotes</label>
                    <Field type="text" name="managerNotes"  value={this.state.store.managerNotes} onChange={this.handleChange} />  </div>

                   <div>   <label for="description">description</label>
                    <Field type="text" name="description"  value={this.state.store.description} onChange={this.handleChange} /> </div>

                   
                    <div>   <input type="submit" value="Edit" onClick={this.editStore} /> </div>

                   
                </Form>
</AlineCenter>
            </Host>
        );
    }
}

export default EditStore;