import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {login} from '../../redux/user.redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

@connect(
  state=>state.user,
  {login}
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      user: '',
      pwd: ''
    };
  }
  handleChange(key,value){
    this.setState({
      [key]: value
    })
  }
  handleLogin(){
    this.props.login(this.state)
  }
  register(){
    this.props.history.push('/register');
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className="error-Msg">{this.props.msg}</p>:null}
            <InputItem
              onChange={v=>this.handleChange('user',v)}
              >User</InputItem>
            <InputItem
              type="password"
              onChange={v=>this.handleChange('pwd',v)}
              >Password</InputItem>
          </List>
          <Button onClick={this.handleLogin} type="primary">Login</Button>
          <WhiteSpace />
          <Button onClick={this.register}>Register</Button>
        </WingBlank>
      </div>
    )
  }
};

export default Login;
