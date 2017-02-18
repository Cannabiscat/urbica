import React, { PureComponent } from 'react';
import MyMap from './MyMap';
import UserList from './UserList';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      usersArray: [],
      currentMarkerPosition: [0, 0],
    };
  }
  componentDidMount() {
    this.getData('http://localhost:4000/features');
  }

  getData = (url) => {
    fetch(url)
    .then(res =>
      res.json())
    .then((data) => {
      const validatedData = data.features.filter((item) => {
        return Math.abs(item.geometry.coordinates[0]) <= 90;
      });
      this.setState({
        usersArray: validatedData,
        currentMarkerPosition: validatedData[0].geometry.coordinates,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getCurrentUserOnMap = (userPosition) => {
    this.setState({ currentMarkerPosition: userPosition });
  }

  render() {
    return (
      <div className='main'>
        <UserList
          usersArray={this.state.usersArray}
          getCurrentUserOnMap={this.getCurrentUserOnMap}
        />
        <MyMap
          usersArray={this.state.usersArray}
          position={this.state.currentMarkerPosition}
        />
      </div>
    );
  }
}
