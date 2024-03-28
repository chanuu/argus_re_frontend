import Axios from 'axios';
import API_PATH from '../api';




// get list of products 
export const fetchProjects = () => {
    return (dispatch) => {
      dispatch({
        type: 'FETCH_PROJECTS',
        payload: new Promise((resolve, reject) => {
          Axios.get(`${API_PATH}Project/GetAll`, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
          })
            .then((res) => {
             
              resolve(res.data);
            })
            .catch((err) => {
              resolve([]);
            });
        }),
      });
    };
  };


  export const deleteProjects = (document) => {
    return (dispatch) => {
      dispatch({
        type: 'DELETE_PROJECTS',
        payload: new Promise((resolve, reject) => {
          Axios.delete(`${API_PATH}Project/Delete/?Id=${document.id}`, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
           
          })
            .then((res) => {
            
              resolve(res.data);
            })
            .catch((err) => {
              resolve([]);
            });
        }),
      });
    };
  };

 //get prpject by its id 
  export const getProjectById = (id) => {
    console.log("Dispath")
    return (dispatch) => {
      dispatch({
        type: 'GET_PROJECT_BY_ID',
        payload: new Promise((resolve, reject) => {
          Axios.get(`${API_PATH}Project/Get?id=${id}`, {

            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
          })
            .then((res) => {
            
              resolve(res.data);
            })
            .catch((err) => {
              resolve([]);
            });
        }),
      });
    };
  };

 // get all tasks by projet id 
  export const getTaskByProjectId = (id) => {
    return (dispatch) => {
      dispatch({
        type: 'GET_TASK_BY_PROJECT_ID',
        payload: new Promise((resolve, reject) => {
          Axios.get(`${API_PATH}TaskMaster/GetTaskByProjectId?projectId=${id}`, {

            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
          })
            .then((res) => {
            
              resolve(res.data);
            })
            .catch((err) => {
              resolve([]);
            });
        }),
      });
    };
  };


  
export const createProject = (newProject) => {
    return (dispatch) => {
      dispatch({
        type: 'CREATE_PROJECT',
        payload: new Promise((resolve, reject) => {
       
          Axios.post(`${API_PATH}Project/Create/`,newProject, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
          })
            .then((res) => {
              dispatch({
                type: 'CREATE_PROJECT_DATA_SUCCESS',
                payload: res.data,
              });
              resolve(res.data);
            })
            .catch((err) => {
              dispatch({
                type: 'CREATE_PROJECT_DATA_ERROR',
                payload: err.message,
              });
              resolve([]);
            });
        }),
      });
    };
  };