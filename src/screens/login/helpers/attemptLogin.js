import axios from 'axios';
// if (process.env.REACT_APP_API_BASE_URL) {
//   axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
// }
const setCookie = function (accountId, password) {
  const userInput = {accountId, password}
  const req = {
    url: "/users/login",
    method: "POST",
    data: userInput
  }
  return axios(req)
};

export default function attemptLogin (
  event,
  userAccount,
  userPassword,
  setError,
  setUser) {
  event.preventDefault();
  setCookie(userAccount, userPassword)
    .then((res) => {
      if (res.data) {
        const user = res.data.user
        setUser({
          name: user.first_name, 
          employee_id: user.employee_id,
          is_admin: user.is_admin
          });
      } else {
        setError('User not found')
      }
    })
    .catch(e => console.error(e))
}