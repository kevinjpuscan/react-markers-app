import * as types from "../types/markerTypes";
const initialState = {
  markers: [
    {
      name: "casa",
      latLon: [45.4, -75.7]
    }
  ],
  newMarker: {}
};
export const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MARKER: {
      return { ...state, markers: [...state.markers, action.payload] };
    }
    case types.REMOVE_MARKER: {
      return { ...state };
    }
    case types.CHANGE_POSITION_NEW_MARKER: {
      return {
        ...state,
        newMarker: { ...state.newMarker, latLon: action.payload }
      };
    }
    case types.CHANGE_NAME_NEW_MARKER: {
      return {
        ...state,
        newMarker: { ...state.newMarker, name: action.payload }
      };
    }
    default: {
      return state;
    }
  }
};