import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-6d51c-default-rtdb.firebaseio.com/'
});

export default instance;