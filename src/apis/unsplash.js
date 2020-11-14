import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID cl4v8AR2s9talMP5uRfe3t_fSlzpp0TkJI3GlEcK3zM',
  },
});
