import React, { useState, cloneElement, useContext, useEffect } from 'react';
import './index.css';

const TabStripContext = React.createContext(null);

export const Tab = props => {
  const { title, className, id, ...domProps } = props;

  const { activeTab, selectedTab, onTabClick } = useContext(TabStripContext);

  let cls = className || '';

  cls += ' TabStripTab';

  if (selectedTab === id) {
    cls += ' TabStripTab--selected';
  }

  const onClick = event => {
    onTabClick(id);
    if (domProps.onClick) {
      domProps.onClick(event);
    }
  };

  return (
    <div {...domProps} className={cls} onClick={onClick}>
      {title}
    </div>
  );
};

const TabStrip = props => {
  let {
    tabs,
    defaultSelectedTab,
    defaultActiveTab,
    selectedTab,
    activeTab,
    onSelectedTabChange,
    onActiveTabChange,
    children,
    className,
    ...domProps
  } = props;

  const [stateActiveTab, setStateActiveTab] = useState(defaultActiveTab);
  const [stateSelectedTab, setStateSelectedTab] = useState(defaultSelectedTab);

  const controlledActiveTab = activeTab !== undefined;
  const controlledSelectedTab = selectedTab !== undefined;

  activeTab = controlledActiveTab ? activeTab : stateActiveTab;
  selectedTab = controlledSelectedTab ? selectedTab : stateSelectedTab;

  if (Array.isArray(tabs)) {
    children = tabs.map(tab => {
      return <Tab {...tab} key={tab.id} />;
    });
  }

  let cls = className || '';

  cls += ' TabStrip';

  const onTabClick = tabId => {
    setSelectedTab(tabId);
  };

  const setSelectedTab = tabId => {
    if (!controlledSelectedTab) {
      setStateSelectedTab(tabId);
    }
    if (onSelectedTabChange) {
      onSelectedTabChange(tabId);
    }
  };

  return (
    <div
      {...domProps}
      onKeyDown={e => {
        // TODO
        // if (e.key === 'ArrowRight') {
        //     setActiveTab()
        // }
        // if (e.key === 'Enter') {
        //     setSelectedTab(activeTab)
        // }
      }}
      className={cls}
      style={{}}
    >
      <TabStripContext.Provider
        value={{
          activeTab,
          selectedTab,
          onTabClick
        }}
      >
        {children}
      </TabStripContext.Provider>
    </div>
  );
};

export default TabStrip;
