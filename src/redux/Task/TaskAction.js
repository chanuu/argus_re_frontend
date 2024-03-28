import Axios from "axios";
import API_PATH from "../api";

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_TASKS",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}TaskMaster/GetAll`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
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

// Define a DataManager instance

// get all tasks by projet id
export const getTaskByProjectId = (id) => {
  console.log("ProjectbyId");
  return (dispatch) => {
    dispatch({
      type: "GET_TASK_BY_PROJECT_ID",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}TaskMaster/GetTaskByProjectId?projectId=${id}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
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

export const createTask = (newTask) => {
  console.log(newTask);
  return (dispatch) => {
    dispatch({
      type: "CREATE_TASK",
      payload: new Promise((resolve, reject) => {
        Axios.post(`${API_PATH}TaskMaster/Create`, newTask, {
          headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
        })
          .then((res) => {
            resolve(res.data);
            dispatch({
              type: "CREATE_TASK_DATA_SUCSESS",
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: "CREATE_TASK_DATA_ERROR",
              payload: err.message,
            });
            resolve([]);
          });
      }),
    });
  };
};
