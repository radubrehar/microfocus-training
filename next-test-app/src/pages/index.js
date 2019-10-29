import React, { useState } from 'react';

import TabStrip from '../components/TabPanel/TabStrip';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('t1');
  return (
    <TabStrip
      style={{ width: '100%' }}
      className="dashboard-tabs"
      selectedTab={selectedTab}
      onSelectedTabChange={setSelectedTab}
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
  );
};

export default Home;
