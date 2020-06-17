import React from "react";
import styled from "styled-components";
import Card from "./card";
import { connect } from "react-redux";

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
    margin-top: 2em;
    display: flex;
    max-width: 100%;
    overflow-x: scroll;
    padding: 1em;
  }
`;
function Panel({ markers }) {
  return (
    <PanelStyled>
      <div className="card-list">
        {markers.map((marker, idx) => (
          <Card marker={marker} key={idx} />
        ))}
      </div>
    </PanelStyled>
  );
}
const mapStateToProps = state => {
  return {
    markers: state.markerReducer.markers
  };
};

export default connect(
  mapStateToProps,
  null
)(Panel);
