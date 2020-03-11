import axios from 'axios';
// if (process.env.REACT_APP_API_BASE_URL) {
//   axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
// }


export default function attemptSignUp (event, first_name, last_name, email, password, setError, setUser)  {
  event.preventDefault();
  // console.log(`attempting to sign-up with ${first_name}, ${last_name}, email: ${email} and password: ${password}`)
  const userInput = {first_name, last_name, email, password}
  const req = {
    url: "/users/signup",
    method: "POST",
    data: userInput
  }
  axios(req)
    .then(res => { 
      if (res.data) {
        console.log(res.data)
      } else {
        setError("User exist already")
      }
     })
    .catch (e => console.error(e))
}