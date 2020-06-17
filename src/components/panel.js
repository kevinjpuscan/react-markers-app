import React from "react";
import styled from "styled-components";
import Card from "./card";
import { connect } from "react-redux";
import * as controlTypes from "../store/types/controlTypes";

export const PanelStyled = styled.div`
  width: 100%;
  height: 220px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  background: white;
  z-index: 400;

  .card-list {
    margin-top: 1em;
    display: flex;
    max-width: 100%;
    overflow-x: scroll;
    padding: 2em;
  }
  .new-marker {
    min-width: 120px;
    height: 120px;
    font-size: 1em;
    border-radius: 15px;
    background: var(--main);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    font-weight: 900;
    cursor: pointer;
  }
`;
function Panel({ markers, handleAddMarkerForm }) {
  return (
    <PanelStyled>
      <div className="card-list">
        {markers.map((marker, idx) => (
          <Card marker={marker} key={idx} idx={idx} />
        ))}
        <div className="new-marker" onClick={handleAddMarkerForm}>
          New Marker
        </div>
      </div>
    </PanelStyled>
  );
}
const mapStateToProps = state => {
  return {
    markers: state.markerReducer.markers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddMarkerForm: () =>
      dispatch({ type: controlTypes.CHANGE_ADD_MARKER_STATE, payload: true })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
