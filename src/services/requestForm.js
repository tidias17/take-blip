import axios from 'axios';
import querystring from 'querystring';
import Class from '../utils/class/main';

export default class requestForm {
  static async formPost(jwt, data) {
    return axios.all([
      axios.post(`${process.env.VUE_APP_URL_API}/asd`,
        querystring.stringify(data),
        { headers: Class.requestClass.contentHeaders(jwt) }),
    ])
      .then(axios.spread((response) => response.data.data))
      .catch((error) => error);
  }
}
