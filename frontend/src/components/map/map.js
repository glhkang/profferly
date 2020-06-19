import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import FormWindow from "./form";
import * as MarkerApiUtil from "../../util/marker_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],  
    };
  }


  componentDidMount() {
    // LOAD MARKERS
    // GET http://api/marker
    // MarkerUtil.getAll()
    // .then(markers => {
    // this.setState({ markers });
    // });
    MarkerApiUtil.getMarkers().then(markers => this.setState({markers: Object.values(markers)[0]}))
    //     //debugger;
    // if (this.state.markers2.length !== 0) {
    //     const markersNew = [...this.state.markers, this.state.markers2[0]];

    //     this.setState({ markers: markersNew });

    // }
  }

  onMapClick = (mapProps, map, clickEvent) => {
    console.log(clickEvent.latLng)
    // if (this.state.showingInfoWindow) {
    //   this.setState({
    //     showingInfoWindow: false,
    //     activeMarker: null,
    //   });

    //   return;
    // }
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();

    console.log(lat, lng)

    this.props.history.push({
      pathname: "/form",
      state: { latitude: lat, longitude: lng},
    });
    //  longitude: clickEvent.latLng.lng(),

    // return (

    
    // <FormWindow lat={40} lng={-70}/>
    // )

    // const newMarker = {
    //   title: `New marker ${this.state.markers.length}`,
    //   description: "Can not be empty!",
    //   longitude: clickEvent.latLng.lng(),
    //   latitude: clickEvent.latLng.lat(),
    // };

    // MarkerApiUtil.writeMarker(newMarker);

    // const markers = [...this.state.markers, newMarker];

    // this.setState({ markers });

    // SAVE NEW MARK ${this.state.mark}`R
    // POST http://api/marker (body: newMarker)
    // MarkerUtil.add(newMarker ${this.state.mark}``
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

  render() {
    // const style = {
    //   width: "100%",
    //   height: "100%",
    // };
    console.log(`${process.env.REACT_APP_GOOGLE_API_KEY}`);

    return (
      <div className="map-main-border">
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
          <Map
            google={this.props.google}
            zoom={2}
            onClick={this.onMapClick}
            initialCenter={{ lat: 40.7128, lng: -74.006 }}
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
})(MapContainer);



