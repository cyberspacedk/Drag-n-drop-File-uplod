import React from 'react';

const DragAndDrop = () => {
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div 
      className="drag-drop-zone"
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