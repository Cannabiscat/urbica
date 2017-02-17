import { Marker } from 'react-leaflet';

export default class ExtendedMarker extends Marker {
  componentDidMount() {
    super.componentDidMount();
    if (this.props.position[0] === this.props.currentPointer[0]
      && this.props.position[1] === this.props.currentPointer[1]) this.leafletElement.openPopup();
  }
  componentDidUpdate() {
    this.leafletElement.closePopup();
    if (this.props.position[0] === this.props.currentPointer[0]
        && this.props.position[1] === this.props.currentPointer[1]) {
      console.log(this.props.currentPointer);
      this.leafletElement.openPopup();
    }
  }
}