import React, { Component } from 'react';
import axios from 'axios';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';

@connect(
	state=>state.chatuser,
	{getUserList}
)
class Employer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 data: []
		};
	}
  componentDidMount(){
		this.props.getUserList('employee')
	}
  render() {
    return (
			<WingBlank>
			<WhiteSpace></WhiteSpace>
				{this.props.userlist.map(v=>(
					v.avatar ? (<Card key={v.user}>
						<Card.Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						>
						</Card.Header>
						<Card.Body>
							{v.desc.split('\n').map(v=>(
								<div key={v}>{v}</div>
							))}
						</Card.Body>
					</Card>)
					: null
				))}
			</WingBlank>
    )
  }
}

export default Employer
