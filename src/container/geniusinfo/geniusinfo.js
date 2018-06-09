
import React from 'react'
import {NavBar,InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'

@connect(
	state=>state.user,
	{update}
)
class GeniusInfo extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc:''
		}
	}
	onChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render(){
		const path = this.props.location.pathname
		const redirect = this.props.redirectTo
		return (
			<div>
				{redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
				<NavBar mode="dark" >EmployeeInfo Edit</NavBar>
				<AvatarSelector 
					selectAvatar={(imgname)=>{
						this.setState({
							avatar:imgname
						})
					}}
				></AvatarSelector>
				<InputItem onChange={(v)=>this.onChange('title',v)}>
					Position
				</InputItem>
				<TextareaItem
					onChange={(v)=>this.onChange('desc',v)}
					rows={3}
					autoHeight
					title='Yourself'
				>
				</TextareaItem>
				<Button 
					onClick={()=>{
						this.props.update(this.state)
					}}
					type='primary'>Save</Button>
			</div>
			
		)
	}
}

export default GeniusInfo