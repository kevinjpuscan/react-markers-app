import React from "react";
import styled from "styled-components";
export const BtnCircleStyled = styled.button`
  padding: 1em;
  border-radius: 50%;
  margin-top: 2em;
  background: white;
  opacity: 100%;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  z-index: 500;
  cursor: pointer;

  ${props =>
    props.primary &&
    ` background: var(--main);
      fill: white;
    `};

  ${props =>
    props.danger &&
    ` background: red;
      fill: white;
    `};

  ${props =>
    props.small &&
    ` padding: 0.3em;
    `};
`;
function BtnCircle({ primary, danger, small, onClick, children }) {
  return (
    <BtnCircleStyled
      primary={primary}
      danger={danger}
      small={small}
      onClick={onClick}
    >
      {children}
    </BtnCircleStyled>
  );
}

export default BtnCircle;
