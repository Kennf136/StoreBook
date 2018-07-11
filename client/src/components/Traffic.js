import React, { Component } from 'react';
import styled from 'styled-components';
import HomeFeedButt from "./HomeFeedButt"

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
display:flex;
justify-content:center;
height:15vh;
width:100vw;
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
`

const TrafficImg= styled.div`
border: solid blue;
height:400px;
width:1000px;
background-image:url("https://www.google.com/maps/vt/data=JT4-76d8DJi-45FdCtN9c3jZYaz6d56-Jewia3wVGIGknkxpzazR97TpilBvCJvt13dBP21A77nSmvIueiJbBBq2EvgYR3MGQwa8Tpqc8p4Wjsnpp1huSF0lRE5Sl0zVgBciB7nZ_iAPPKsGhBCrIOAbooUzBdQSYr-fDdX2d6zmzbJy05V9r5lcqkW3wg1ihMBerrCbnGpFRQkx7YIB48scRPr3YpQBo-GVpJG1ABV8t0BJfn16HPpPxybyUFLjPUY")
`

const Locations= styled.div`
padding-left:310px;
padding-top:18px;
`
class Traffic extends Component {
    render() {
        return (
            <Host>
                
                <Nav> <HomeFeedButt/>   </Nav>

            <Back>  
                
            <TrafficImg> </TrafficImg>    
                
             </Back>
<div>
    <Locations> 
       <div><span> SnaleVile </span>ljdlsalkdalkdlkalc/k</div><div><span> Kennasaw  </span>alksalksasd</div> <div><span>Panthersvile </span>alcsknksdcklsmcklsmdcklsmlkcs</div> 
        
        
    </Locations>
</div>
            </Host>
        );
    }
}

export default Traffic;