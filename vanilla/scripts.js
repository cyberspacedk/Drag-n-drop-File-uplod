let dropArea = document.getElementById('drop-area'); 

const events = ['dragenter', 'dragover', 'dragleave', 'drop'];
const enterDragEvents = events.slice(0,2); 
const leaveDragEvent = events.slice(2) 

function clearDefaultsBehavior (e){
  e.preventDefault();
  e.stopPropagation();
};

function highlight() {
  dropArea.classList.add('highlight')
};

function unHighlight(){
  dropArea.classList.remove('highlight')
}; 

function uploadFile(file){ 
  let url = 'URL_TO_SEND_FILE'
  let formData = new FormData()

  formData.append('file', file); 

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(() => {})
  .catch(() => {})
}

// handle input selection
function handleFiles(files) { 
  const localFiles = [...files];
  localFiles.forEach(uploadFile);
  localFiles.forEach(previewFile)
}

// handle drop selection
function handleDrop(e){
  let dt = e.dataTransfer; 
  let files = dt.files; 
  
  handleFiles(files)
}

// preview image while dragging
function previewFile(file){
  const reader = new FileReader();
  reader.onloadend = ()=>{
    let imgNode = document.createElement('img');
    imgNode.src = reader.result;
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.appendChild(imgNode);
  }
  reader.readAsDataURL(file)
}


events.forEach(event => dropArea.addEventListener(event, clearDefaultsBehavior, false));
enterDragEvents.forEach(event=> dropArea.addEventListener(event, highlight, false));
leaveDragEvent.forEach(event=> dropArea.addEventListener(event, unHighlight, false));

dropArea.addEventListener('drop', handleDrop, false);