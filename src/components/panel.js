import React from "react";
import styled from "styled-components";

export const PanelStyled = styled.div`
  width: 100%;
  height: 220px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  background: white;
  z-index: 400;
`;
function Panel() {
  return <PanelStyled></PanelStyled>;
}

export default Panel;
