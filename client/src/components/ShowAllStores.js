import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Host = styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
height:100vh;
width:100vw;
margin:auto;
border:solid;
display:flex;
flex-wrap:wrap
`
const Back = styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
height:auto;
width:100vw;
display:flex;
flax-wrap:wrap;
justify-content:center;
align-content:center;
align-items:baseline;
`
const Nav = styled.nav`
height:15vh;
width:100vw;
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
`
const CardForm = styled.div`
background-image: linear-gradient(to left bottom, #edbbec, #e7b9e9, #e1b7e5, #dcb4e2, #d6b2de);
display:inline-flex;
justify-content:space-between;
align-items:stretch;
font-size:13px;
border:solid;
width:300px;
height:300px;
flex-wrap:wrap;
overflow: scroll;
text-decoration:none;
margin:3px;
// margin-top:130px;


`

class ShowAllStores extends Component {
    state={
       store:[ ]
    }
    componentDidMount() {
    
        axios.get(`/api/stores`).then((res) => {
            console.log("stores info", res.data)
            this.setState({
                store: res.data,
                
            })
        }).catch((err) => {
            console.error(err)
        })
    }
    
    
    render() {


      
        console.log("Rendering Show All Stores",stores)
       
        const stores = this.state.store
        const allStores = stores.map((singleStore, i) => {
            console.log("Inside my map", singleStore)
            return (
                <Link key={i} to={`/stores/${singleStore._id}`}>
                    <CardForm>

                        <h1>Store: {singleStore.name} </h1>

                        <h6>Number:{singleStore.number}</h6>
                        <h6>Location:{singleStore.location}</h6>
                        <h3> {singleStore.description}</h3>
                        
                    </CardForm>

                </Link>
            )
        })


        return (
            <Host>

                <Nav>
                    <h1>Welcome StoreBook, select your store sight to get started, or click add to Create a new store.! </h1>
                    <Link to={'/stores/new'} >
                        <button>add</button>
                    </Link>
                </Nav>
                <Back>
                    
                    <div>{allStores}</div>

                </Back>
            </Host>
        )
    }
}

export default ShowAllStores
