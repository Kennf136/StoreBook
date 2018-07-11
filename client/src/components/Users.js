import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import UserFedLogin from './UserFedLogin'

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
height:100vh;

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
width:180px;`

const Tonny = styled.h1`

`
class User extends Component{
    state={
       users:[] 
    }
    render(){


    
    return(
    

      <Host>  
      
      
      
      <StoreZone>  
      <InsideStore>   
 <Tonny>Tonny </Tonny>
 <div>  <Link to={'/stores'}> <Button> home</Button></Link> </div>
<div> <Button>edit</Button> </div> 
 <div><Button onClick={this.deleteStore}>Delete </Button> </div>
  </InsideStore>     
  
  
  </StoreZone>
  
     <CardForm>  
         <form>

        <div> <label for="name">Email</label>
                    <input type="text" name="Email"  />
</div>
<div>
                    <label for="Password">Password</label>
                    <input type="text" name="location"  />  
                    </div>

         </form>
          <UserFedLogin/>
  </CardForm>
      </Host>
    )
    }
}

export default User