import React, { PureComponent } from 'react';

export default class User extends PureComponent {
  handleOnClick = (event) => {
    event.persist();
    event.preventDefault();
    this.props.getCurrentUserOnMap(event.target.dataset.value.split(','));
  }
  render() {
    const user = this.props.user;
    const userBlock = user ? (
      <div className='user'>
        <img className='avatar' src={user.properties.avatar} alt={user.properties.userName} />
        <div className='user-info'>
          <span className='user-name'>
            {user.properties.userName}
            <a href='' onClick={this.handleOnClick}>
              <button className='find-me' data-value={user.geometry.coordinates}>
                Find me!!
              </button>
            </a>
          </span>
          <span className='user-email-homepage'><h5>{user.properties.email}</h5><a href={user.properties.url}>Homepage</a></span>
        </div>
      </div>
    ) : 'None';
    return userBlock;
  }
}
User.propTypes = {
  user: React.PropTypes.object,
  getCurrentUserOnMap: React.PropTypes.func,
};