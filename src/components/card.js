import React from "react";
import styled from "styled-components";
import RemoveIcon from "../images/close";
import BtnCircle from "./btnCircle";
import { connect } from "react-redux";
import * as controlTypes from "../store/types/controlTypes";

export const CardStyled = styled.div`
  margin-right: 1em;
  position: relative;
  .container-card {
    min-width: 120px;
    height: 120px;
    font-size: 3em;
    border-radius: 15px;
    background: var(--gray-very-light);
    color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  .btn-remove {
    position: absolute;
    top: -25px;
    right: -5px;
    display: none;
  }

  .name-card {
    text-align: center;
    margin-top: -30px;
    font-family: "Roboto";
    color: var(--gray);
    font-size: 0.75em;
  }

  &:hover {
    .container-card {
      border: 2px solid var(--main);
      box-sizing: border-box;
    }
    .btn-remove {
      display: block;
    }
  }
`;

function Card({ marker, handleChangeCenter }) {
  return (
    <CardStyled onClick={() => handleChangeCenter(marker.latLon)}>
      <div className="container-card">
        <span>{marker.name.substring(0, 1).toUpperCase()}</span>
      </div>
      <div className="name-card">{marker.name}</div>
      <div className="btn-remove">
        <BtnCircle small danger>
          <RemoveIcon size="12px"></RemoveIcon>
        </BtnCircle>
      </div>
    </CardStyled>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    handleChangeCenter: latLon =>
      dispatch({ type: controlTypes.CHANGE_CENTER_MAP, payload: latLon })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Card);
