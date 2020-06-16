import React from "react";
import { Map, TileLayer } from "react-leaflet";
import CustomMarker from "./customMarker";
import { connect } from "react-redux";

function MapContent({ center, markers }) {
  return (
    <div>
      <Map center={center} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map((marker, idx) => (
          <CustomMarker marker={marker} />
        ))}
      </Map>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    center: state.controlReducer.centerMap,
    markers: state.markerReducer.markers
  };
};

export default connect(
  mapStateToProps,
  null
)(MapContent);
