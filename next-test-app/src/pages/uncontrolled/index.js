import React from 'react';

import TabStrip from '../../components/TabPanel/TabStrip';

const Home = () => {
  return (
    <TabStrip
      style={{ width: '100%' }}
      className="dashboard-tabs"
      defaultSelectedTab={'t2'}
      tabs={[
        {
          title: <b>Tab 1</b>,
          id: 't1'
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
