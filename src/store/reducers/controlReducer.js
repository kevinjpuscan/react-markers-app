import * as types from "../types/controlTypes";
const initialState = {
  isPanelOpen: false,
  isAddMarker: false,
  zoom: 12,
  centerMap: [45.4, -75.7]
};
export const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PANEL_STATE: {
      return { ...state, isPanelOpen: action.payload };
    }
    case types.CHANGE_ADD_MARKER_STATE: {
      return { ...state, isAddMarker: action.payload };
    }
    case types.CHANGE_CENTER_MAP: {
      return { ...state, centerMap: action.payload };
    }
    case types.CHANGE_ZOOM_MAP: {
      return { ...state, zoom: action.payload };
    }
    default: {
      return state;
    }
  }
};
