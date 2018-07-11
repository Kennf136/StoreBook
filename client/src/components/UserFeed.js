import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import LogOut from './LogOut';


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
flex-direction:column;
padding-left:20px;
`
const Nav = styled.nav`
display:flex;
justify-content:space-evenly;
height:15vh;
width:100vw;
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
`
const AlertBox = styled.div`
display:flex;
flex-direction:column;
height:120px;
width:550px;
`
const CardForm = styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
display:inline-flex;
justify-content:space-between;
align-items:center;
font-size:13px;
border:solid;
width:150px;
height:150px;
flex-wrap:wrap;
text-decoration:none;
margin:3px;
&:hover{ 
    align-items:flex-start;
    height:600px;
    width:400px;
    font-size: 30px;
    p {
        display:inline-flex;
        font-size: 15px;
    }
}
p{
    display:none;
}

`
const Api = styled.div`
display:inline-flex;
justify-content:space-evenly;
width:3000px;
`
const ManigerFeed = styled.div`
display:flex;
justify-content:space-evenly;
width:100vw;

`
const ManigerNotes = styled.div`
height:145px;
`
const FeedStacker=styled.div`
display:flex;
flex-direction:column;
width:550px;
height:auto;

`
const UserName=styled.span`
color:blue;
font-size:18px;
`
class UserFeed extends Component {
    render() {
        return (
            <Host>

                <Nav>
                    <span> Pm </span>
                    <div>
                        {/* {StoreName} */}
                        <div> <span> Store name</span></div>
                        <div> <LogOut /> </div>
                    </div>
                    <span>schedule</span>
                </Nav>
                <Api> <Link to={'./Weather'}> <h1>weather</h1>  </Link>
                    <Link to={'./Traffic'}><h1>traffic</h1></Link></Api>

                <Back>

                    <AlertBox>
                        <span>Weakly Objectives: </span>
                        <span>SALE GOALS:</span>
                        <span>  DRINKS:LONG ISLAND TEA, BUSH MASTER RUM</span>
                        <span>SPECIALS:HALF PRICE CHICKEN GUMBO  </span>
                        <span> ITEM OF THE WEEK: DOUBLE FISH AN SHRIMP POE BOI</span>
                        <span> SERVER OF THE WEEK:TEMPOS</span>

                    </AlertBox>

                    <ManigerNotes>
                        <span>Manager notes:</span> <p></p>
                    </ManigerNotes>

                    <ManigerFeed> <CardForm> Manager:<FeedStacker><p><UserName>Pedro:</UserName>  <UserName>Marko</UserName>  wants a extra day off, how does Armado's time look?  </p> </FeedStacker> </CardForm>
                        <CardForm>cooks: <FeedStacker><p> <UserName>Marko:</UserName> I need a day off   </p> <p><UserName>Petro:</UserName> work harder.</p> <p><UserName>Armado:</UserName> I need some extra time,can I come in today for @<span>Marko</span></p> </FeedStacker> </CardForm>
                        <CardForm>server: <FeedStacker><p><UserName>Emmly: </UserName> I MADE SALES!!! </p>
                         <p><UserName>Tempos:</UserName> @<UserName>Emmly</UserName> GOOD JOB GIRL!!!</p> 
                         <p><UserName>JDiggs:</UserName> What was that employ of the month bones tho @<UserName>Tempos</UserName>? </p> 
                         <p><UserName>Tempos:</UserName> Well, I get to go to a day spa while yall are working,on a day of my choice.  </p> 
                         <p><UserName>David: </UserName> Aw man, I came in second again!. </p></FeedStacker></CardForm> </ManigerFeed>
                </Back>
            </Host>






        );
    }
}

export default UserFeed;
