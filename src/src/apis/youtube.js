import axios from 'axios';
const KEY = 'AIzaSyDf8qtWYfa6K26Nq0GKTJx5-niEvzI3SZc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})