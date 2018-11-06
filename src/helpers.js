import axios from 'axios';

// axios.defaults.baseURL = 'https://gentle-escarpment-19443.herokuapp.com';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const auth = token => {

    if (token) {
      localStorage.getItem('token');
    }

    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

};

export { auth };
