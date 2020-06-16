import * as types from "../types/markerTypes";
const initialState = {
  markers: [
    {
      name: "casa",
      latLon: [45.4, -75.7]
    }
  ]
};
export const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MARKER: {
      return { ...state, markers: [...state.markers, action.payload] };
    }
    case types.REMOVE_MARKER: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
