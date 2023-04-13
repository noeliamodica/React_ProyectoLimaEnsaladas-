import axios from 'axios'
import db from '../../db.json'




//Register User
const register = async (userData) => {
    const response = await axios.post(db, userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
   
  }
  

  // Logout user
const logout = () => {
  localStorage.removeItem('user')
}

  const userService = {
    register,
    logout,
  }
  
  export default userService

