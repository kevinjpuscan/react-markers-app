import React from "react";
import { Marker } from "react-leaflet";
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
      draggable={true}
      onDragend={() => console.log("hola")}
      position={marker.latLon}
      icon={L.divIcon({
        className: "custom icon",
        html: renderToStaticMarkup(
          <IconStyled>{marker.name.substring(0, 1).toUpperCase()}</IconStyled>
        )
      })}
    />
  );
}

export default CustomMarker;
