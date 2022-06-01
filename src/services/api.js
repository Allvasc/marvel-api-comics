import axios from 'axios';
import md5 from 'md5';

const publicKey = '9689507afe1e9d33662729e81720b2f4';
const privateKey = '653fd46916c8aaf8076444b8f0e2aa8fb52e73a0';

const time = new Date().getDate();

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash, 
    },
})

export default api