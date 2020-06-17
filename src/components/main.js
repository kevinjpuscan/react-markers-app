import React, { useEffect } from "react";
import styled from "styled-components";
import Map from "./map/mapContent";
import Menu from "./menu";
import Panel from "./panel";
import Form from "./form";
import { connect } from "react-redux";
import * as controlTypes from "../store/types/controlTypes";

import getLocation from "../services/geolocation";

export const MainStyled = styled.div`
  height: 100vh;
`;

function Main({ isPanelOpen, isAddMarker, setCenter }) {
  useEffect(() => {
    getLocation().then(position => {
      setCenter([position.latitude, position.longitude]);
    });
  }, [setCenter]);

  return (
    <MainStyled>
      {isAddMarker && <Form />}
      <Map />
      <Menu />
      {isPanelOpen && <Panel />}
    </MainStyled>
  );
}

const mapStateToProps = state => {
  return {
    isPanelOpen: state.controlReducer.isPanelOpen,
    isAddMarker: state.controlReducer.isAddMarker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCenter: latlng =>
      dispatch({ type: controlTypes.CHANGE_CENTER_MAP, payload: latlng })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
