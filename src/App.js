
import React, { Component  } from 'react'
import { Switch ,Route} from 'react-router-dom'
import login from './login'
import list from './List'


export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <Switch>
            <Route exact path= '/' component={login}></Route>
            <Route exact path='/list' component={list}></Route>
          </Switch>
        
      </div>
    )
  }
}

