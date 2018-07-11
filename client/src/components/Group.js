import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LinkToUser from './LogInToUser'

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


class Group extends Component{
    state={
       groups:[] 
    }
    render(){
       
    return(
      <Host>
          <StoreZone>  
<h1> Managers</h1>
<div>  <Link to={'/stores'}> <Button> home</Button></Link> </div>
              <InsideStore>   </InsideStore>
          </StoreZone>

          <CardForm><h3>Tonny</h3> 
          <Link to= { ' /LoginToUser'}>
         <LinkToUser/>
           </Link>
          </CardForm>
         
          <CardForm><h3>Jill</h3> <Button>Log In</Button></CardForm>
             </Host>
    )
    }
}

export default Group