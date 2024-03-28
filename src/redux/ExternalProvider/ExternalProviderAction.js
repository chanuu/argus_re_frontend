import Axios from 'axios';
import API_PATH from '../api';

// get list of documents 
export const fetchExternalProviders = () => {
    return (dispatch) => {
      dispatch({
        type: 'FETCH_EXTERNAL_PROVIDERS',
        payload: new Promise((resolve, reject) => {
          Axios.get(`${API_PATH}ExternalProvider/GetAll`, {
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