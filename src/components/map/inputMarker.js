import React, { createRef } from "react";
import { Marker } from "react-leaflet";
import { connect } from "react-redux";

import * as markerTypes from "../../store/types/markerTypes";

function InputMarker({ center, changePosition }) {
  const refMarker = createRef();

  const updatePosition = () => {
    const marker = refMarker.current;
    if (marker != null) {
      const { lat, lng } = marker.leafletElement.getLatLng();
      changePosition([lat, lng]);
    }
  };
  return (
    <Marker
      ref={refMarker}
      draggable={true}
      onDragend={updatePosition}
      position={center}
    />
  );
}

const mapStateToProps = state => {
  return {
    center: state.controlReducer.centerMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePosition: latLong =>
      dispatch({
        type: markerTypes.CHANGE_POSITION_NEW_MARKER,
        payload: latLong
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputMarker);
