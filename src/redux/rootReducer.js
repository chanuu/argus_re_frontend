import { combineReducers } from 'redux';
import taskReducer from './Task/TaskReducer';
import userReducer from './User/UserReducer';
import docuementReducer from './Document/DocumentReducer';
import externalProviderReducer from './ExternalProvider/ExternalProviderReducer';
import projectReducer from './Project/ProjectReduer';
import bordReducer from './Kanban/BoardReducer';
import listByIdReducer from './Kanban/listsByIdReducer';
import cardByIdReducer from './Kanban/cardsByIdReducer';




const rootReducer = combineReducers({
  tasks: taskReducer,
  users: userReducer,
  documents : docuementReducer,
  externalProviders : externalProviderReducer,
  projects: projectReducer,
  boards : bordReducer,
  listById: listByIdReducer,
  cardById:cardByIdReducer
});

export default rootReducer;
