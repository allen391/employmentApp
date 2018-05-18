import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
import UserCard from '../usercard/usercard';

@connect(
	state=>state.chatuser,
	{getUserList}
)
class Employee extends Component {
  componentDidMount(){
		this.props.getUserList('employer')
	}
  render() {
    return(
      <UserCard userlist={this.props.userlist}></UserCard>
    )
  }
}

export default Employee