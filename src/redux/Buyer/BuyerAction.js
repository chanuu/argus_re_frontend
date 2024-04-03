import Axios from "axios";
import API_PATH from "../api";

// get list of documents
export const fetchBuyers = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_BUYERS",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}buyers`, {
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

export const getBuyerById = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_BUYER_BY_ID",
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}buyers/${id}`, {
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


