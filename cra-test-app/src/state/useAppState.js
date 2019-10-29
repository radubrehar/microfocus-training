import { AppContext } from './context';
import { useContext } from 'react';

export default () => {
  const { state, dispatch } = useContext(AppContext);

  return { state, dispatch };
};
