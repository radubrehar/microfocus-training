export const setDashboardTab = (state, action) => {
  return {
    ...state,
    selectedDashboardTab: action.payload
  };
};

const setFooterTab = state => state;

const mapReducers = {
  SET_DASHBOARD_TAB: setDashboardTab,
  SET_FOOTER_TAB: setFooterTab
};

const reducer = (state, action) => {
  if (mapReducers[action.type]) {
    return mapReducers[action.type](state, action);
  }

  return state;
};

export default reducer;
