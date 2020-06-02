import Axios from './Axios'

export const login = async(user) => {
   try {
      const success = await Axios.post('/api/users/login', user, {
         withCredentials: true
      })
      console.log(success)
      // return success.data
   } catch (err) {
      console.log(err)
      // throw Error(err.response.data.message)
   }
}
