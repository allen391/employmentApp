import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem,Radio, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {regisger} from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'
@connect(
	state=>state.user,
	{regisger}
)
@imoocForm
class Register extends React.Component{
	constructor(props) {
		super(props)
		this.handleRegister = this.handleRegister.bind(this)
	}
	componentDidMount(){
		this.props.handleChange('type','genius')
	}
	handleRegister(){
		this.props.regisger(this.props.state)
	}
	render(){
		const RadioItem = Radio.RadioItem
		return (
			<div>
				{this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
				<Logo></Logo>
				<List>
					{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
					<InputItem
						onChange={v=>this.props.handleChange('user',v)}
					>Username</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						onChange={v=>this.props.handleChange('pwd',v)}
					>Password</InputItem>
					<WhiteSpace />
					<InputItem
						maxLength={255}
						type='password'
						onChange={v=>this.props.handleChange('repeatpwd',v)}
					>Confirm</InputItem>
					<WhiteSpace />
					<RadioItem
						checked={this.props.state.type==='genius'}
						onChange={()=>this.props.handleChange('type','genius')}
					>
						Employee
					</RadioItem>
					<RadioItem
						checked={this.props.state.type==='boss'}
						onChange={()=>this.props.handleChange('type','boss')}
					>
						Employer
					</RadioItem>
					<WhiteSpace />
					<Button type='primary' onClick={this.handleRegister}>Register </Button>
				</List>


			</div>

		)
	}
}

export default Register