import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Links from './links';
import home from './Image/home.jpg';
import about from './Image/about.jpg';
import contact from './Image/contact.jpg';
import GetIndex from './Container/Get_Customer';
import CreateMyForm from './Container/Create';
//import CustomerDetail from './Container/CustomerDetail';
import CustomerDetail2 from './Container/CustomerDetail2';
import Edit from './Container/editcustomer';
import Login from './Container/login';
import AuthService from './utils/AuthService';

const auth = new AuthService('pFG42lJpsqHf1xLIBbLKBFp92yaMumpI', 'saurabhwanjari.auth0.com');
// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' })
//   }
// }

const parseAuthHash = (nextState, replace) => {
  //    console.log(nextState,replace)
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.parseHash(nextState.location.hash)
  }
}


const Name = function () {
  return <Login auth={auth} />
}


const Routeq = () => {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/login" render={() => { return <Name /> } } />
          {/*<Route component={Links }/>*/}
   
   
    <Route render={(nextState) => {
            return <Links nextState={nextState} />
          } } />

              {/*<Route render={(nextState) => {
                 if (!auth.loggedIn()) {
            //    console.log(auth.loggedIn());
            return <Redirect to="/login" />
          }
          else {
            return (<Links nextState={nextState} />)
          }   
          } } />*/}

        </Switch>



   

        <Route path="/Home" render={() => <div> <h1> Home</h1> <img src={home} className="animation3" alt="kk" height="200px" width="300px" /> </div>} />

        {/*<Route path="/login" component={Name} />*/}


        <Route exact path="/" render={(nextState) => {
          parseAuthHash(nextState)
          if (!auth.loggedIn()) {
            //    console.log(auth.loggedIn());
            return <Redirect to="/login" />
          }
          else {
            return (<div> <GetIndex nextState={nextState} /></div>)
          } } } />




        <Route path="/CreateMyForm"
          render={(nextState) => {
            if (!auth.loggedIn()) {
              //console.log(auth.loggedIn());
              return <Redirect to="/login" />
            }
            else {
              return (<div>     <CreateMyForm nextState={nextState} /></div>)
            }
          } } />


        <Route path="/Edit/:ID?"
          render={(nextState) => {
            if (!auth.loggedIn()) {
              //    console.log(auth.loggedIn());
              return <Redirect to="/login" />
            }
            else {
              return (<div>      <Edit nextState={nextState} /></div>)
            } } } />



        <Route path="/CustomerDetail2"
          render={(nextState) => {
            if (!auth.loggedIn()) {
              //console.log(auth.loggedIn());
              return <Redirect to="/login" />
            }
            else {
              return (<div>     <CustomerDetail2 nextState={nextState} /></div>)
            }
          } } />


        <Route path="/About" render={() => <div> <h1> about</h1> <img src={about} className="animation3" alt="kk" height="200px" width="300px" /> </div>} />
        <Route path="/contact" render={() => <div> <h1> contact</h1> <img src={contact} className="animation3" alt="kk" height="200px" width="300px" /> </div>} />


        {/*<Route path="/CustomerDetail2" component={CustomerDetail2} />
     <Route path="/Edit/:ID?" component={Edit , Links} />
     <Route path="/Edit/:ID?" render={()=><div><Edit />  <Links /></div> } />
        <Route path="/GetCustomer" component={GetIndex,} />
        <Route path="/CustomerDetail/:ID" render={({match}) => {
          return <CustomerDetail match={match} />
        } } />*/}
      </div>
    </Router>
  );
}

export default Routeq;