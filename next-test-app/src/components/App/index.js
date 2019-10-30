import { useReducer } from 'react';
import initialState from '../../state/initialState';
import reducer from '../../state/reducer';
import { AppContext } from '../../state/context';

const App = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App;
