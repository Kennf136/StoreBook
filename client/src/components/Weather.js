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
flex-direction:column;
justify-content:center;
align-content:center;
align-items:center;
height:15vh;
width:100vw;
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
`
const CardFormOne = styled.div`
background-image: url("https://media.giphy.com/media/3o85xKWxQi1cQ59q2k/giphy.gif");
background-size:contain;
display:inline-flex;
justify-content:space-between;
align-items:flex-start;
font-size:30px;
border:solid;
width:200px;
height:400px;
flex-wrap:wrap;
overflow: scroll;
text-decoration:none;
margin:3px;
// margin-top:130px;
`
const CardFormTwo = styled.div`
background-image: url("http://img1.wikia.nocookie.net/__cb20110805153051/adventuretimewithfinnandjake/images/5/5f/Party_god.gif");
background-size:contain;
display:inline-flex;
justify-content:space-between;
align-items:flex-start;
font-size:30px;
border:solid;
width:200px;
height:400px;
flex-wrap:wrap;
overflow: scroll;
text-decoration:none;
margin:3px;
// margin-top:130px;
`
const CardFormThree = styled.div`
background-image: url("http://2.bp.blogspot.com/-hSKZZ3xRriE/U0YdxkJU3HI/AAAAAAAABV4/jeBbxiDO7fk/s1600/monday.gif");
background-size:contain;
justify-content:space-between;
align-items:flex-start;
font-size:30px;
border:solid;
width:200px;
height:400px;
flex-wrap:wrap;
overflow: scroll;
text-decoration:none;
margin:3px;
// margin-top:130px;
`
const CardFormFour = styled.div`
background-image: url("http://liquidflare.net/junk/gifs/corgi_snow.gif");
background-size:contain;
display:inline-flex;
justify-content:space-between;
align-items:stretch;
font-size:30px;
border:solid;
width:200px;
height:400px;
flex-wrap:wrap;
overflow: scroll;
text-decoration:none;
margin:3px;
// margin-top:130px;
`
const CardFormFive = styled.div`
background-image: url("https://media3.giphy.com/media/OFIsBxe3v7mKI/giphy.gif") ;
background-size:contain;
display:inline-flex;
justify-content:space-between;
align-items:flex-start;
font-size:30px;
border:solid;
width:200px;
height:400px;
flex-wrap:wrap;
overflow: scroll;
text-decoration:none;
margin:3px;
// margin-top:130px;
`
const Span=styled.span`
background:rgba(128,128,128,0.3);
display:flex;
justify-content:space-between;
height:auto;
`
class Weather extends Component {
    render() {
        return (
            <Host>
                <Nav>   <div>Local weather Report</div> 
               <HomeFeedButt/>  
                </Nav> 
            <Back>
                <div>     </div>

                {/* <div>   */}
                     <CardFormOne> <Span>  Rain  73 </Span></CardFormOne>
               <CardFormTwo> <Span>cloudy  73</Span>  </CardFormTwo>
               <CardFormThree> <Span> sunny 76 </Span> </CardFormThree>
               <CardFormFour> <Span>snow 45</Span> </CardFormFour>
               <CardFormFive>  <Span> windy 60</Span> </CardFormFive> 
               {/* </div> */}
                
            </Back>
            </Host>
        );
    }
}

export default Weather;