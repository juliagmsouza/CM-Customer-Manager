import axios from 'axios'

const requester = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});
export default {
  async getContacts(favorited) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const config = {
      headers: {
        Authorization: `Berer ${authData.token}`
      }
    }
    if(favorited === true){
      config.params = {
        favorito: true
      }
    }
    const response = await requester.get('/contatos', config);
    return response.data
  },
  
  async detailContact(id){
    const authData = JSON.parse(localStorage.getItem('authData'));
    const config = {
      headers: {
        Authorization: `Berer ${authData.token}`
      }
    }
    const response = await requester.get(`/contatos/${id}`, config);
    return response.data
  },

  async editContact(id, body){
    const authData = JSON.parse(localStorage.getItem('authData'));
    const config = {
      headers: {
        Authorization: `Berer ${authData.token}`
      }
    }
    const response = await requester.put(`/contatos/${id}`, body, config);
    return response.data
  },
  async deleteContact(id){
    const authData = JSON.parse(localStorage.getItem('authData'));
    const config = {
      headers: {
        Authorization: `Berer ${authData.token}`
      }
    }
    const response = await requester.delete(`/contatos/${id}`, config);
    return response.data
  },
  async addContact(body){
    const authData = JSON.parse(localStorage.getItem('authData'));
    const config = {
      headers: {
        Authorization: `Berer ${authData.token}`
      }
    }
    const response = await requester.post(`/contatos`, body, config);
    return response.data
  },
}