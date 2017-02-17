import React, { PureComponent } from 'react';
import User from './User';

export default class UserList extends PureComponent {
  render() {
    const list = this.props.usersArray.map((item) => {
      return (
        <User
          user={item}
          key={item.id}
          getCurrentUserOnMap={this.props.getCurrentUserOnMap}
        />
      );
    });
    return (
      <div className='user-list'>{list}</div>
    );
  }
}

UserList.propTypes = {
  usersArray: React.PropTypes.array,
  getCurrentUserOnMap: React.PropTypes.func,
};