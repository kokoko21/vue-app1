import axios from 'axios';

const instance = axios.create({
  baseURL: "https://firestore.googleapis.com/v1/projects/vuejs-axios-15c6b/databases/(default)/documents"

});

export default instance;