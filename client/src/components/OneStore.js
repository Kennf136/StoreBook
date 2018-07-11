import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom'
import LinkToLogG from './LinkToLogG';

const Host= styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
height:100vh;
width:100vw;
margin:auto;
border:solid;
display:flex;
flex-wrap:wrap
`
const StoreZone=styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
width:300px;

`
const InsideStore=styled.div`
margin-left:30px;
`
const CardForm = styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
display:inline-flex;
justify-content:space-between;
align-items:center;
font-size:13px;
border:solid;
width:300px;
height:300px;
flex-wrap:wrap;
text-decoration:none;
margin:3px;
// margin-top:130px;
`
const Button= styled.button`
height:30px;
width:180px;
`
class OneStore extends Component {
    state = {
        store: {
            groups: []
        }, 
        groups: []
    }

    componentDidMount() {
        const storeId = this.props.match.params.storeId

        axios.get(`/api/stores/${storeId}`).then((res) => {
            console.log("store info", res.data)
            this.setState({
                store: res.data,
                groups: res.data.groups
            })
        }).catch((err) => {
            console.error(err)
        })
    }

    deleteStore = (storeId) => {
       
        axios.delete(`/api/stores/${this.props.match.params.storeId}`).then((res) => {
            console.log("delete up")
          this.props.history.push('/stores') 
          this.props.showAll()
        })
       
      }
    

    render() {
        const storeId = this.props.match.params.storeId
        console.log('This is groups', this.state.groups)
        const groups = this.state.groups
        const group = this.state.groups.map((singleGroup, i) => {
            return (
                
                  
               <CardForm> 
               {singleGroup.roles} 
               <button> Edit</button>
               <button>delete</button>
                </CardForm>
            )
        })


        return (
            <Host>
                <StoreZone>  
                    <InsideStore>   
               <h1>{this.state.store.name}</h1>
               <div>  <Link to={'/stores'}> <Button> home</Button></Link> </div>
              <div> <Link to={`/stores/${this.state.store._id}/edit`} ><Button>edit</Button></Link> </div> 
               <div><Button onClick={this.deleteStore}>Delete Store </Button> </div>
               <div> <Link to={`/stores/${this.state.store._id}/edit/group`}> <button> New Role </button> </Link></div> 
                </InsideStore>     
                </StoreZone>

               <div>   <h3>{group}</h3> </div>
               <LinkToLogG/>
            </Host>
        )
    }
}

export default OneStore