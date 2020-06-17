import React from "react";
import { Map, TileLayer } from "react-leaflet";
import CustomMarker from "./customMarker";
import InputMarker from "./inputMarker";
import { connect } from "react-redux";

function MapContent({ center, markers, isAddMarker }) {
  return (
    <div>
      <Map center={center} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {isAddMarker && <InputMarker />}

        {!isAddMarker &&
          markers.map((marker, idx) => (
            <CustomMarker key={idx} marker={marker} />
          ))}
      </Map>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    center: state.controlReducer.centerMap,
    markers: state.markerReducer.markers,
    isAddMarker: state.controlReducer.isAddMarker
  };
};

export default connect(
  mapStateToProps,
  null
)(MapContent);
