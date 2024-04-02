import Axios from "axios";
import API_PATH from "../api";

// get list of documents
export const fetchAudits = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_AUDITS",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}audits`, {
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


// export const deleteAudits = (audit) => {
//   return (dispatch) => {
//     dispatch({
//       type: "DELETE_AUDITS",
//       payload: new Promise((resolve, reject) => {
//         Axios.delete(`${API_PATH}Audit/Delete/?Id=${audit.id}`, {
//           headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
//         })
//           .then((res) => {
//             fetchAudits();
//             resolve(res.data);
//           })
//           .catch((err) => {
//             resolve([]);
//           });
//       }),
//     });
//   };
// };

export const getAuditById = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_AUDIT_BY_ID",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}Audit/${id}`, {
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

export const createAudit = (newDoucment) => {
  return (dispatch) => {
    dispatch({
      type: "CREATE_AUDIT",
      payload: new Promise((resolve, reject) => {
        Axios.post(`${API_PATH}Audit`, newDoucment, {
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
