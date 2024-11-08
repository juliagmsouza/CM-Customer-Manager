import axios from 'axios'

const requester = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL, // Replace with your API's base URL
    timeout: 10000, // Optional: set a timeout (in milliseconds)
    headers: {
      'Content-Type': 'application/json', // Customize headers if necessary
    },
  });
export default {
    async login(email, senha) {
        const response = await requester.post('/auth/login', { email, senha });
        return response.data
    },
    async createUser(body) {
        return await requester.post('/auth/register',{
            nome: body.name,
            email: body.email,
            senha: body.password
        });
    },    
    async passwordReset(email) {
        return await requester.post('/auth/recuperar-senha',{
            email
        });
    },
    async passwordRecovery(body) {
        return await requester.post('/auth/resetar-senha', body);
    }
}