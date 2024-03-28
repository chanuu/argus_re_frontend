import Axios from "axios";
import API_PATH from "../api";

// get list of documents
export const fetchDocuments = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_DOCUMENTS",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}Documents`, {
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

export const deleteDocuments = (document) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_DOCUMENTS",
      payload: new Promise((resolve, reject) => {
        Axios.delete(`${API_PATH}Document/Delete/?Id=${document.id}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
        })
          .then((res) => {
            fetchDocuments();
            resolve(res.data);
          })
          .catch((err) => {
            resolve([]);
          });
      }),
    });
  };
};

export const getDocumentById = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_DOCUMENT_BY_ID",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}Documents/?id=${id}`, {
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

export const createDocument = (newDoucment) => {
  return (dispatch) => {
    dispatch({
      type: "CREATE_DOCUMENT",
      payload: new Promise((resolve, reject) => {
        Axios.post(`${API_PATH}Document/Create/`, newDoucment, {
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
