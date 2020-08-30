import React, {useReducer} from 'react'; 

import DragAndDrop from './DragAndDrop';

import {dndInitialState, dndReducer} from './utils'

const App = ()=> {
  const [data, dispatch] = useReducer(dndReducer, dndInitialState);
  console.log("➡️: App -> data", data)
 
  
  return (
    <div className="App">
      <h1>React drag-and-drop component</h1>
      <DragAndDrop 
        data={data}
        dispatch={dispatch}
      />
      <ol className="dropped-files">
        {data.fileList.map(file => (<li key={file.name}>{file.name}</li>))}
      </ol>
    </div>
  );
}

export default App;
