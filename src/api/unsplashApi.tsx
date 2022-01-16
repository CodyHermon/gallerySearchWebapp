import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Oa3xbWZ59mkibW-JWWvBs3KvSDZoCZC-Apo160UKNBw',
    }
});