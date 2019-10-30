import { useState } from 'react';

import TabStrip from '../../components/TabPanel/TabStrip';
const App = () => {
  const [selectedTab, setSelectedTab] = useState('t2');
  const [tabs, setTabs] = useState([
    {
      title: 'Tab 1',
      id: 't1'
    },
    {
      title: 'Tab 2',
      id: 't2'
    }
  ]);

  return (
    <div>
      <TabStrip tabs={tabs} selectedTab={selectedTab} />
      <button
        onClick={() => {
          const tabIndex = tabs.length + 1;
          setTabs([
            ...tabs,
            {
              id: 't' + tabIndex,
              title: 'Tab ' + tabIndex
            }
          ]);
        }}
      >
        add new tab
      </button>
    </div>
  );
};

export default App;
