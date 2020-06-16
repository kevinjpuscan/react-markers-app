import React from "react";
import styled from "styled-components";
import Map from "./map/mapContent";
import Menu from "./menu";
import Panel from "./panel";
import { connect } from "react-redux";

export const MainStyled = styled.div`
  height: 100vh;
`;

function Main({ isPanelOpen, isAddMarkerOpen }) {
  return (
    <MainStyled>
      <Map />
      <Menu />
      {isPanelOpen && <Panel />}
    </MainStyled>
  );
}

const mapStateToProps = state => {
  return {
    isPanelOpen: state.controlReducer.isPanelOpen,
    isAddMarkerOpen: state.controlReducer.isAddMarkerOpen
  };
};

export default connect(
  mapStateToProps,
  null
)(Main);
