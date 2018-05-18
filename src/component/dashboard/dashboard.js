import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { NavBar } from 'antd-mobile';
import NavLinkBar from '../navlink/navlink';
import Employer from '../../component/employer/employer';
import Employee from '../../component/employee/employee';


function Msg(){
  return <h2>msg</h2>
}
function User(){
  return <h2>user</h2>
}
@connect(
  state => state
)
class Dashboard extends Component {
  
  render() {
    const {pathname} = this.props.location
    const user = this.props.user
    const navList = [
      {
        path:'/employer',
        text: 'Employee',
        icon: 'boss',
        title: 'Employee List',
        component: Employer,
        hide: user.type === 'employee'
      },
      {
        path:'/employee',
        text: 'Employer',
        icon: 'job',
        title: 'Employer List',
        component: Employee,
        hide: user.type === 'employer'
      },
      {
          path:'/msg',
          text: 'Message',
          icon: 'msg',
          title: 'Message List',
          component: Msg
      },
      {
        path:'/me',
        text: 'About Me',
        icon: 'user',
        title: 'User Center',
        component: User
      }
    ]
    return (
      <div>
        <NavBar className='fixd-header' mode='dard'>{navList.find(v=>v.path===pathname).title}</NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default Dashboard
