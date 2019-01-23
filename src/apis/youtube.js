import axios from 'axios';
// npm install --save axios
// command to install axios

const KEY = 'AIzaSyAGKgqCdtcqnlnPlt0UktdwPCXiE8is6zE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});