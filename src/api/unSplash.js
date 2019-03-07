import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID d462a96d676c94b0986f5640e48ad6e5a49591daccc004ef67acc8929e265156'

      }
});