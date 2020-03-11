import axios from 'axios';
if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}
const cookieSetter = function (email, password) {
  const userInput = {email, password: password}
  const req = {
    url: "/users",
    method: "POST",
    data: userInput
  }
  return axios(req)
};

export function attemptLogin (event, email, password, setError, setUser) {
  event.preventDefault();
  cookieSetter(email, password)
    .then((res) => {
      if (res.data) {
        setUser({name: res.data.user.first_name, id: res.data.user.id});
      } else {
        setError('User not found')
      }
    })
    .catch(e => console.error(e))
}

export function attemptSignUp (event, first_name, last_name, email, password, setError, setUser)  {
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
        setUser({name: res.data.userInfoBackFromDb.first_name, id: res.data.userInfoBackFromDb.id})
      } else {
        setError("User exist already")
      }
     })
    .catch (e => console.error(e))
}