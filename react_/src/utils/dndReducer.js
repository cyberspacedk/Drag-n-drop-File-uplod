import {DND_EVENTS} from '../constants'

export const dndInitialState = {
  dropDepth: 0,
  inDropZone: false,
  fileList: []
}

export const dndReducer = (state, action) => {
  switch(action.type){
    case DND_EVENTS.SET_DROP_DEPTH:   
      return {state, dropDepth: action.dropDepth};
    case DND_EVENTS.SET_IN_DROP_ZONE:
      return { ...state, inDropZone: action.inDropZone };
    case DND_EVENTS.ADD_FILE_TO_LIST:
      return { ...state, fileList: state.fileList.concat(action.files) };
    default: return state
  }
}