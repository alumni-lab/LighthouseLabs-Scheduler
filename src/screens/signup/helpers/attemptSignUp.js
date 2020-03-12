import axios from 'axios';
// if (process.env.REACT_APP_API_BASE_URL) {
//   axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
// }

const randomFixedInteger = function (length) {
  return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}

const makeID = (fname,lname) => {
  const rand4 = randomFixedInteger(4);
  const employeeId = fname[0].toUpperCase()+lname[0].toUpperCase()+rand4;
  const accountId = employeeId+"_lhl"
  return [employeeId, accountId];
}
const makePW = (fname) => {

  const rand6 = randomFixedInteger(6)
  const firstN = fname.toLowerCase().split("");
  const randIndex = Math.floor(Math.random()*firstN.length);
  firstN[randIndex]=firstN[randIndex].toUpperCase();
  const string = firstN.join("")

  const symbols = ["!","@","#","$","%","&","*"]
  const randSymbol = symbols [Math.floor(Math.random()*symbols.length)];

  const password = string+randSymbol+rand6;
  
  return password
}

const formatName = name => {
  let n = name.toLowerCase().split("");
  n[0] = n[0].toUpperCase();
  const formattedName = n.join("");
  return formattedName;
}





export default function attemptSignUp (
  userFirstName,
  userLastName,
  userEmail,
  role,
  wage,
  fullTimeStatus,
  abilityToLecture,
  isAdmin,
  setError
) {
  //formatting
  wage = wage*100
  userFirstName = formatName(userFirstName);
  userLastName = formatName(userLastName);
  role = role.toLowerCase();

  //generating id, pw
  const [employeeId,accountId] = makeID(userFirstName, userLastName);
  const password = makePW(userFirstName);

  const userInput = {
    userFirstName,
    userLastName,
    userEmail,
    employeeId,
    accountId,
    password,
    role,
    wage,
    fullTimeStatus,
    abilityToLecture,
    isAdmin
  }
  console.log(userInput)
  const req = {
    url: "/users",
    method: "POST",
    data: userInput
  }
  return axios(req)
    .then(res => { 
      if (res.data) {
        console.log("result: ",res.data)
      } else {
        setError("User exist already")
      }
     })
}