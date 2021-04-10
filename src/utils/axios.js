import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://salty-sands-19687.herokuapp.com'
})

export default instance;