import React, { Component } from 'react';
import UserForm from './components/UserForm';
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import Registration from './components/Registration';
import RegUser from './components/RegUser';
import ViewUser from './components/ViewUser';

class App extends Component {
  render() {
    return (
      <div >
      
       <BrowserRouter>
       <div>
       <ul>
            <li><Link to='/'>Sign IN</Link></li>
            <li><Link to='/Register'>Sign UP</Link></li>
            <li><Link to='/viewuser'>ViewUsers</Link></li>
          </ul>

          <hr />
                <Switch>
                <Route path='/' exact strict component={UserForm} />
                <Route path='/Welcome' exact strict component={Welcome}/>
                <Route path='/Register' component={RegUser(Registration)}/>
                <Route path='/ViewUser' component={ViewUser}/>
                </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
