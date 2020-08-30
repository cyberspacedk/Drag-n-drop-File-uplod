import React, {useReducer} from 'react'; 

import DragAndDrop from './DragAndDrop';

import {dndInitialState, dndReducer} from './utils'

const App = ()=> {
  const [data, dispatch] = useReducer(dndReducer, dndInitialState);
 
  
  return (
    <div className="App">
      <h1>React drag-and-drop component</h1>
      <DragAndDrop 
        data={data}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
