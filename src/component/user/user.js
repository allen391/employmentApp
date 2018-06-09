import React from 'react'
import {connect} from 'react-redux'
import {Result, List,Brief,WhiteSpace,Modal,Button} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
	state=>state.user,
	{logoutSubmit}
)
class User extends React.Component{
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout(){
		const alert = Modal.alert

		alert('Cancel', 'Are you sure to logout???', [
		      { text: 'Cancel', onPress: () => console.log('cancel') },
		      { text: 'Confirm', onPress: () => {
		      	browserCookie.erase('userid')
		      	this.props.logoutSubmit()
		      }}
		    ])
	}
	render(){
		const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
		console.log(props)
		return props.user?(
			<div>
				<Result
					img={<img src={require(`../img/${props.avatar}.png`)} style={{width:50}} alt="" />}
					title={props.user}
					message={props.type=='boss'?props.company:null}
				/>
				
				<List renderHeader={()=>'Desc'}>
					<Item
						multipleLine
					>
						{props.title}
						{props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
						{props.money?<Brief><b>Salary</b>:{props.money}</Brief>:null}
					</Item>
					
				</List>
				<WhiteSpace></WhiteSpace>
				<List>
					<Button type="primary" onClick={this.logout}>Logout</Button>
				</List>
			</div>
		):<Redirect to={props.redirectTo} />

	}
}


export default User
