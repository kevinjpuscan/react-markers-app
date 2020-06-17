import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BtnCircle from "./btnCircle";
import ListIcon from "../images/list.js";
import AddIcon from "../images/add.js";
import CloseIcon from "../images/close.js";
import * as controlType from "../store/types/controlTypes";

export const MenuStyled = styled.div`
  display: flex;
  flex-direction: ${props => (props.isOpen ? "row" : "column")};
  justify-content: space-between;
  width: ${props => (props.isOpen ? "100%" : "max-content")};
  height: max-content;
  box-sizing: border-box;
  padding: 0 2em;
  position: absolute;
  right: 0;
  bottom: ${props => (props.isOpen ? "190px" : "2em")};
`;

function Menu({ isPanelOpen, handleOpen, handleClose, handleAddMarkerForm }) {
  return (
    <MenuStyled isOpen={isPanelOpen}>
      <BtnCircle primary onClick={handleAddMarkerForm}>
        <AddIcon />
      </BtnCircle>
      <BtnCircle onClick={isPanelOpen ? handleClose : handleOpen}>
        {isPanelOpen ? <CloseIcon /> : <ListIcon />}
      </BtnCircle>
    </MenuStyled>
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
    handleOpen: () =>
      dispatch({ type: controlType.CHANGE_PANEL_STATE, payload: true }),
    handleClose: () =>
      dispatch({ type: controlType.CHANGE_PANEL_STATE, payload: false }),
    handleAddMarkerForm: () =>
      dispatch({ type: controlType.CHANGE_ADD_MARKER_STATE, payload: true })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
