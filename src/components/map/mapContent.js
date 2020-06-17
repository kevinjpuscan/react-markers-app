import React from "react";
import { Map, TileLayer } from "react-leaflet";
import CustomMarker from "./customMarker";
import InputMarker from "./inputMarker";
import { connect } from "react-redux";
import * as controlTypes from "../../store/types/controlTypes";

function MapContent({
  center,
  markers,
  isAddMarker,
  changeCenterMap,
  zoom,
  changeZoomMap
}) {
  const handleChangeCenter = event => {
    let { lat, lng } = event.target.getCenter();
    changeCenterMap([lat, lng]);
  };

  const handleChangeZoom = event => {
    changeZoomMap(event.target.getZoom());
  };
  return (
    <div>
      <Map
        center={center}
        zoom={zoom}
        onMoveEnd={handleChangeCenter}
        onZoomEnd={handleChangeZoom}
      >
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
    zoom: state.controlReducer.zoom,
    markers: state.markerReducer.markers,
    isAddMarker: state.controlReducer.isAddMarker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCenterMap: latLng =>
      dispatch({ type: controlTypes.CHANGE_CENTER_MAP, payload: latLng }),
    changeZoomMap: zoom =>
      dispatch({ type: controlTypes.CHANGE_ZOOM_MAP, payload: zoom })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContent);
