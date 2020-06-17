import React from "react";
import styled from "styled-components";
import Map from "./map/mapContent";
import Menu from "./menu";
import Panel from "./panel";
import Form from "./form";
import { connect } from "react-redux";

export const MainStyled = styled.div`
  height: 100vh;
`;

function Main({ isPanelOpen, isAddMarker }) {
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

export default connect(
  mapStateToProps,
  null
)(Main);
