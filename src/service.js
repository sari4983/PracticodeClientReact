import axios from 'axios';

axios.defaults.baseURL=process.env.REACT_APP_API_URL + '/items'

axios.interceptors.response.use(function (response) {
  console.log("successfull");    
  return response;   
}, function (error) {     
  console.log("error: ",error);
  return Promise.reject(error);   
});

export default {
  getTasks: async () => {
    const result = await axios.get(``)
    return result.data;
  },

  addTask: async (name) => {
    var item = { id: 0, name: name, isComplete: false }
    return await axios.post(``, item);
  },

  setCompleted: async (id,name, isComplete) => {
    return await axios.put(`/${id}`,{name:name, isComplete:isComplete})
  },

  deleteTask: async (id) => {
    await axios.delete(`/${id}`);
  }
};

