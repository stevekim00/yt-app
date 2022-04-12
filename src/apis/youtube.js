import axios from 'axios';

const KEY = 'AIzaSyBiOUJgGAAz0CNzYkams9IUbeBYd1rbDnU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY 
    }
});
