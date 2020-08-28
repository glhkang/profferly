import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import * as MarkerApiUtil from "../../util/marker_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import InfoModal from "./info_modal";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      show: false,
    };
  }

  componentDidMount() {
    // LOAD MARKERS -- GET http://api/marker
    MarkerApiUtil.getMarkers().then((markers) =>
      this.setState({ markers: Object.values(markers)[0] })
    );
  }

  onMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();

    this.props.history.push({
      pathname: "/form",
      state: { latitude: lat, longitude: lng },
    });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarkerName: props.name,
      activeMarkerTitle: props.title,
      activeMarkerId: props.id,
      activeMarkerRevision: props.revision,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onRenameClick = () => {
    const markers = this.state.markers;
    const marker = markers.find((o) => o.id === this.state.activeMarkerId);

    if (marker) {
      marker.revision++;
    }

    this.setState({ markers }, () => {
      console.log("Markers after update", this.state.markers);
    });
  };

  showModal = () => {
      this.setState({
        show: true
      });
  };

  closeModal = () => {
      this.setState({
        show: false
      });
  };

  render() {
debugger
    return (
      <div className="map-window">
        <button
          className="home-button"
          onClick={(e) => {
            e.preventDefault();
            this.props.history.push("/posts");
          }}
        >
          <FontAwesomeIcon className="home-icon" icon={faHome} />
        </button>
        
        <button
          className="info-button"
          onClick={this.showModal}
        >
            <FontAwesomeIcon className="info-icon" icon={faInfoCircle} />
            <span class="tooltiptext">Click to learn how to create an event</span>
        </button>

        <InfoModal show={this.state.show} handleClose={this.closeModal} />

        <Map 
          google={this.props.google}
          zoom={4}
          zoomControl={false}
          streetViewControl={false}
          fullscreenControl={false}
          onClick={this.onMapClick}
          initialCenter={{ lat: 40.7128, lng: -74.006 }}
          className="google-map"
        >
          {this.state.markers.map((
            marker,
            index // {title: "", des: "", lat: , lng: }
          ) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.description}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              onClick={this.onMarkerClick}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.activeMarkerTitle}</h1>
              <p>{this.state.activeMarkerName}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
})(MapContainer);
