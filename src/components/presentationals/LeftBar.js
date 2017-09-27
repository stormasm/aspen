import React from 'react'

import DashboardZero from '../../components/containers/DashboardZero'
import DashboardOne from '../../components/containers/DashboardOne'
import DashboardTwo from '../../components/containers/DashboardTwo'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const LeftBar = () => (
  <Router>
    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
        <li className="pure-menu-item"><Link className="pure-menu-link" to="/dashboard-one">Dashboard One</Link></li>
        <li className="pure-menu-item"><Link className="pure-menu-link" to="/dashboard-two">Dashboard Two</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={DashboardZero}/>
      <Route path="/dashboard-one" component={DashboardOne}/>
      <Route path="/dashboard-two" component={DashboardTwo}/>
    </div>
  </Router>
)

export default LeftBar
