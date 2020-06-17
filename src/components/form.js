import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as markerTypes from "../store/types/markerTypes";
import * as controlTypes from "../store/types/controlTypes";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 900;
  width: 100%;
  position: absolute;
  top: 1em;
  left: 0;
  right: 0;
  & input {
    height: 40px;
    width: 250px;
    font-size: 1em;
    border: none;
    padding: 5px 10px;
  }

  & button {
    border: none;
    background: white;
    color: ${props => (props.active ? "var(--main)" : "var(--gray-light)")};
    padding: 0 2em;
    cursor: pointer;
    font-family: "Roboto";
    font-size: 0.8em;
    font-weight: 700;
  }
`;

function Form({ changeName, addMarker, newMarker, exitModeAddMarker }) {
  let [nameMarker, setNameMarker] = useState("");
  let [isActive, setIsActive] = useState(false);

  const handleChange = event => {
    setIsActive(event.target.value.length > 0);
    setNameMarker(event.target.value);
    changeName(event.target.value);
  };

  const handleSaveMarker = () => {
    if (isActive) {
      addMarker(newMarker);
      setNameMarker("");
      exitModeAddMarker();
    }
  };

  return (
    <FormStyled active={isActive}>
      <input
        type="text"
        placeholder="name of marker"
        onChange={handleChange}
        value={nameMarker}
      />
      <button onClick={handleSaveMarker}>Save</button>
    </FormStyled>
  );
}

const mapStateToProps = state => {
  return {
    newMarker: state.markerReducer.newMarker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: name =>
      dispatch({ type: markerTypes.CHANGE_NAME_NEW_MARKER, payload: name }),
    addMarker: marker =>
      dispatch({ type: markerTypes.ADD_MARKER, payload: marker }),
    exitModeAddMarker: () =>
      dispatch({ type: controlTypes.CHANGE_ADD_MARKER_STATE, payload: false })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
