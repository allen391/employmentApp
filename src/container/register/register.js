import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';
import {Redirect} from 'react-router-dom';

@connect(
  state=>state.user,
  {register}
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '', 
      type: 'employee'
    };
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, value){
    this.setState({
      [key]: value
    });
  }
  handleRegister(){
    this.props.register(this.state);
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo></Logo>
        <List>
          {this.props.msg?<p className="error-Msg">{this.props.msg}</p>:null}
          <InputItem
            onChange={v=>this.handleChange('user',v)}
          >UserName</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('pwd',v)}
          >Password</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('repeatpwd',v)}
          >Confirm</InputItem>
          <WhiteSpace />
          <RadioItem 
            checked={this.state.type==='employee'}            
            onChange={v=>this.handleChange('type','employee')}>
            Employee
          </RadioItem>
          <RadioItem 
            checked={this.state.type==='employer'}
            onChange={v=>this.handleChange('type','employer')}>
            Employer
          </RadioItem>
          <WhiteSpace />
          <Button type='primary'
            onClick={this.handleRegister}>Register</Button>
        </List>
      </div>
    )
  }
};

export default Register;
