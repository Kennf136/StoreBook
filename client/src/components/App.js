import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import ShowAllStores from './ShowAllStores';
import axios from 'axios';
import OneStore from './OneStore';
import NewStore from './NewStore';
import EditStore from './EditStore';
import Weather from './Weather';
import Traffic from './Traffic';
import UserFeed from './UserFeed';
import Users from './Users';
import Group from './Group';
import NewRole from './NewRole';

const Host = styled.div`
background-image: linear-gradient(to left top, #7591bc, #8aa6c8, #a2bbd4, #bdd0e0, #dae5ec);
background-size:cover;
height:auto;
margin:0;
// border: solid blue;
`
class App extends Component {
  state = {
    stores: [],
    groups: [],
    users: []

  };





  componentDidMount() {
   
    this.showAll()
 
  }
 
  

   showAll = () => {
    let stores = []
    let groups = []
    let users = []

    axios.get('/api/stores')
      .then((res) => {
        stores = res.data
        console.log("list of stores",res.data)
        return axios.get('/api/groups')
      })
      .then((res) => {
        groups = res.data
        console.log(" list of groups", res.data)
        return axios.get('/api/users')
      })
      .then((res) => {
        users = res.data
        console.log("users",res.data)
        this.setState({
          stores,
          users,
          groups
        
      })
    })
      .catch((err) => {
        console.error(err)
      })

  

  }
  render() {
    console.log("Rendering Show App.js", this.state.stores);

    const StorePageWrapper = (props) => (
      <ShowAllStores stores={this.state.stores} groups={this.state.groups} users={this.state.users} {...props} />
    );
    const StoreIDPageWrapper = (props) => (
      <OneStore  showAll={this.showAll} {...props} />

    );
    const NewStoreWrapper = (props) => (<NewStore showAll={this.showAll} {...props} />);
    const EditStoreWrapper = (props) => (<EditStore  showAll={this.showAll} {...props} />);
    const weatherWrapper=(props)=> (< Weather {...props}/>);
    const trafficWrapper=(props)=> (< Traffic {... props}/>)
    const UserFeedWrapper=(props)=>(<UserFeed {...props}/>);
    const UsersWrapper=(props)=>(<Users/>)
    const GroupWrapper=(props)=>(<Group/>)
    const NewRoleWrapper=(props)=>(<NewRole/>)
   
    return (
      <Router>
        <Host >
          <Switch>
            <Route exact path="/" render={StorePageWrapper}/>
            <Route exact path="/stores" render={StorePageWrapper} />
            <Route exact path="/stores/new" render={NewStoreWrapper} />
            <Route exact path="/stores/:storeId/edit" render={EditStoreWrapper} />
            <Route exact path="/stores/:storeId" render={StoreIDPageWrapper} />
            <Route exact path='/stores/:storeId/edit/group' render={NewRoleWrapper}/>
            <Route exact path="/group" render={GroupWrapper}/>
             <Route exact path="/weather" render={weatherWrapper}/>
             <Route exact path="/traffic" render={trafficWrapper}/>
             <Route exact path='/UserFeed' render={UserFeedWrapper}/>
             <Route exact path='/users'  render={UsersWrapper}/>
            
          </Switch>
        </Host>
      </Router>
    );
  }
}



export default App;
