import * as types from "../types/controlTypes";
const initialState = {
  isPanelOpen: false,
  isAddMarkerOpen: false,
  centerMap: [45.4, -75.7]
};
export const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PANEL_STATE: {
      return { ...state, isPanelOpen: action.payload };
    }
    case types.CHANGE_ADD_MARKER_STATE: {
      return { ...state, isAddMarkerOpen: action.payload };
    }
    default: {
      return state;
    }
  }
};
