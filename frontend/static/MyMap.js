import React, { PureComponent } from 'react';
import { Map, Popup, TileLayer } from 'react-leaflet';
import Marker from './ExtendedMarker';

export default class MyMap extends PureComponent {
  render() {
    const markers = this.props.usersArray.map((item) => {
      return (
        <Marker
          key={item.id}
          position={item.geometry.coordinates}
          currentPointer={this.props.position.map(num => Number(num))}
        >
          <Popup>
            <span><img className='popup-img' src={item.properties.avatar} alt={item.properties.userName} /><br />{item.properties.userName}</span>
          </Popup>
        </Marker>
      );
    });
    const map = (
      <Map center={this.props.position.map(item => Number(item))} zoom={5}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        { markers }
      </Map>
    );
    return map;
  }
}
MyMap.propTypes = {
  usersArray: React.PropTypes.array,
  position: React.PropTypes.array,
};