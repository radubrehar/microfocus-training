import Link from 'next/link';
import TabStrip from '../TabPanel/TabStrip';

export default props => {
  return (
    <TabStrip
      style={{ width: '100%' }}
      selectedTab={props.selectedFilter || 'all'}
      tabs={[
        {
          title: (
            <Link href="/">
              <a>All</a>
            </Link>
          ),
          id: 'all'
        },
        {
          title: (
            <Link href="/active">
              <a>Active</a>
            </Link>
          ),
          id: 'active'
        },
        {
          title: (
            <Link href="/completed">
              <a>Completed</a>
            </Link>
          ),
          id: 'completed'
        }
      ]}
    />
  );
};
