import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';

class UserCard extends Component {
  static propTypes = {
    userlist: PropTypes.array.isRequired
  } 
  render() {
    return (
      <div>
      <WingBlank>
			<WhiteSpace></WhiteSpace>
				{this.props.userlist.map(v=>(
					v.avatar ? (<Card key={v._id}>
						<Card.Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						>
						</Card.Header>
            <Card.Body>
              {v.type==='employer' ? <div>Company: {v.company}</div> : null}
							{v.desc.split('\n').map(d=>(
								<div key={d}>{d}</div>
              ))}
              {v.type==='employer' ? <div>Salary: {v.money}</div> : null}
						</Card.Body>
					</Card>)
					: null
				))}
			</WingBlank>
      </div>
    )
  }
};

export default UserCard;
