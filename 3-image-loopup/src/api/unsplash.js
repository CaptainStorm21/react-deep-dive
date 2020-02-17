import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xF3boNWFEMwXSnLb7BIPVXU0kFdC8a51zQJBDMOouCY'
    }
});