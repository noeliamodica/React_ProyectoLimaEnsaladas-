import axios from 'axios'

const API_URL = 'http://localhost:3000/products'

//Register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

  const userService = {
    register,
    
  }
  
  export default userService

