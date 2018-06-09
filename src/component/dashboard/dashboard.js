import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Route, Redirect} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import Msg from '../msg/msg'
import {getMsgList,recvMsg} from '../../redux/chat.redux'
import QueueAnim from 'rc-queue-anim'


@connect(
	state=>state,
	{getMsgList,recvMsg}
)
class Dashboard extends React.Component{
	componentDidMount(){
		if (!this.props.chat.chatmsg.length) {
			this.props.getMsgList()
			this.props.recvMsg()
		}

	}
	render(){
		const {pathname} = this.props.location
		const user = this.props.user
		const navList = [
			{
				path:'/boss',
				text:'Employee',
				icon:'boss',
				title:'Employee List',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'Employer List',
				component:Genius,
				hide:user.type=='boss'
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
				text:'Me',
				icon:'user',
				title:'About Me',
				component:User
			}
		]

		const page = navList.find(v=>v.path === pathname)

		//动画生效的话只渲染一个route， 根据当前的path决定组件
		return page?(
			<div>
				<NavBar className='fixd-header' mode='dard'>{page.title}</NavBar>
				<div style={{marginTop:45}}>
					<QueueAnim type='scaleX' duration={800}>
							<Route key={page.path} path={page.path} component={page.component}></Route>
					</QueueAnim>
				</div>

				<NavLinkBar data={navList}></NavLinkBar>
				
			</div>
		) : <Redirect to="/msg"></Redirect>

		
	}

}

export default Dashboard