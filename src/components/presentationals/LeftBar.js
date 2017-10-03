import React from 'react'

import DashboardZero from '../../components/containers/DashboardZero'
import DashboardOne from '../../components/containers/DashboardOne'
import DashboardTwo from '../../components/containers/DashboardTwo'
import DashboardThree from '../../components/containers/DashboardThree'
import DashboardFour from '../../components/containers/DashboardFour'

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

        <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover"><Link className="pure-menu-link" to="/dashboard-three">Semiotic</Link>
           <ul className="pure-menu-children">
               <li className="pure-menu-item"><Link className="pure-menu-link" to="/dashboard-three">Dashboard Three</Link></li>
               <li className="pure-menu-item"><Link className="pure-menu-link" to="/dashboard-four">Dashboard Four</Link></li>
           </ul>
        </li>

      </ul>
      <hr/>
      <Route exact path="/" component={DashboardZero}/>
      <Route path="/dashboard-one" component={DashboardOne}/>
      <Route path="/dashboard-two" component={DashboardTwo}/>
      <Route path="/dashboard-three" component={DashboardThree}/>
      <Route path="/dashboard-four" component={DashboardFour}/>
    </div>
  </Router>
)

export default LeftBar
