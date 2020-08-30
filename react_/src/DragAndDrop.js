import React from 'react';

import {DND_EVENTS} from './constants';

const DragAndDrop = ({ data, dispatch }) => {
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({type: DND_EVENTS.SET_DROP_DEPTH, dropDepth: data.dropDepth+1})
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({type: DND_EVENTS.SET_DROP_DEPTH, dropDepth: data.dropDepth-1})
    if(data.dropDepth > 0) return;
    dispatch({type: DND_EVENTS.SET_IN_DROP_ZONE, inDropZone: false})
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    dispatch({type: DND_EVENTS.SET_IN_DROP_ZONE, inDropZone: true});
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];

    if(files && files.length>0){
      const existingFiles = data.fileList.map(file=> file.name);
      files = files.filter(file => !existingFiles.includes(file.name));

      dispatch({type: DND_EVENTS.ADD_FILE_TO_LIST, files});

      e.dataTransfer.clearData();

      dispatch({type: DND_EVENTS.SET_DROP_DEPTH, dropDepth: 0})
      dispatch({type: DND_EVENTS.SET_IN_DROP_ZONE, inDropZone: false})
    }
  };

  return (
    <div  
      className={data.inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave} 
      onDrop={ handleDrop}
    >
      <p>Drag files here to upload</p>
    </div>
  )
};

export default DragAndDrop;