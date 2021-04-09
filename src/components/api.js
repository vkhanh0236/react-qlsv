// dùng axios
import axios from "axios";
const apis = axios.create({
  baseURL: "https://khanhsaodo.herokuapp.com",
  headers: { Authorization: "token" },
});

export async function checkLogin(loginEmail, loginPassword) {
  return apis
    .post(`/login`, {
      email: loginEmail,
      password: loginPassword,
    })
    .then(function (res) {
      const token = res.data.token;
      console.log(token);
      return res;
    });
}
// dùng fetch
// export async function checkLogin(loginEmail, loginPassword) {
//     return fetch("https://khanhsaodo.herokuapp.com/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: loginEmail ,
//         password:  loginPassword ,
//       }),
//     })
//       .catch((error) => {
//         console.log("Error", error);
//       });
//   }
