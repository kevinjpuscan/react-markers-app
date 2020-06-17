import React from "react";
import { Marker, Tooltip } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import L from "leaflet";
import styled from "styled-components";

export const IconStyled = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 1.5em;
  background: var(--main);
  color: white;
  border-radius: 5px;
`;

function CustomMarker({ marker }) {
  return (
    <Marker
      position={marker.latLon}
      icon={L.divIcon({
        className: "custom icon",
        html: renderToStaticMarkup(
          <IconStyled>{marker.name.substring(0, 1).toUpperCase()}</IconStyled>
        )
      })}
    >
      <Tooltip direction="top" offset={[10, -10]}>
        {marker.name}
      </Tooltip>
    </Marker>
  );
}

export default CustomMarker;
