import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Employer from '../../component/employer/employer'
import Employee from '../../component/employee/employee'
import User from '../../component/user/user'

function Msg(){
	return <h2>消息列表页面</h2>
}

@connect(
	state=>state
)
class Dashboard extends React.Component{

	render(){
		const {pathname} = this.props.location
		const user = this.props.user
		const navList = [
			{
				path:'/employer',
				text:'employer',
				icon:'boss',
				title:'Employee List',
				component:Employer,
				hide:user.type==='employee'
			},
			{
				path:'/employee',
				text:'Employee',
				icon:'job',
				title:'Employer List',
				component:Employee,
				hide:user.type==='employer'
			},
			{
				path:'/msg',
				text:'Message',
				icon:'msg',
				title:'Message',
				component:Msg
			},
			{
				path:'/me',
				text:'About me',
				icon:'user',
				title:'User Center',
				component:User
			}
		]


		return (
			<div>
				<NavBar className='fixd-header' mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
				<div style={{marginTop:45}}>
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
