import React, { useState, useContext, useEffect } from 'react';

import './App.css';
import Toggle from './components/Toggle';
import TabStrip, { Tab } from './components/TabPanel/TabStrip';

import useAppState from './state/useAppState';

const App = () => {
  const [value, setValue] = useState(true);

  const { state, dispatch } = useAppState();

  window.app = {
    state,
    dispatch
  };

  const setDashboardTab = tabId => {
    dispatch({
      type: 'SET_DASHBOARD_TAB',
      payload: tabId
    });
  };

  useEffect(() => {
    dispatch({
      type: 'FETCH_START'
    });
  }, []);

  return (
    <div className="App">
      <TabStrip
        style={{ width: '100%' }}
        className="dashboard-tabs"
        selectedTab={state.selectedDashboardTab}
        onSelectedTabChange={setDashboardTab}
        tabs={[
          {
            title: <b>Tab 1</b>,
            id: 't1',
            onClick: () => {
              // alert('tab 1 clicked');
            }
          },
          {
            title: <i>Tab 2</i>,
            id: 't2'
          }
        ]}
      />

      <button
        onClick={() => {
          setDashboardTab('t1');
        }}
      >
        set t1 as selected
      </button>
      <TabStrip>
        <Tab title="Tab 1" id="t1" />
        <Tab title="Tab 2" id="t2" />
      </TabStrip>

      <Toggle
        className="xxx"
        style={{ background: 'red' }}
        onClick={() => {
          console.log('clicked!');
        }}
        defaultValue={true}
        onToggleChange={value => {
          // console.warn('New value', value);
        }}
      />
      <Toggle value={value} onToggleChange={setValue} />
    </div>
  );
};

export default App;
