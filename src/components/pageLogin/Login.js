  
import { useState } from "react";
import { useHistory } from "react-router";
import { checkLogin } from "../api";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isError , setError] = useState(false);
  const history = useHistory();
  async function login(){
    try {
      const res = await checkLogin(loginEmail, loginPassword);
      if (res.status === 200){
        history.push("/");
      }else{
        setError(true)
        console.log(isError)
      }
    } catch (err){
      alert('cannot connect to server!')
    }
  }

  return (
    <div className="container">
      <form className="login-page">
        <h1 className="title">Đăng Nhập</h1>
        {isError && <div>email or password sai</div>}
        <div className="input-field">
          <input
            type="email"
            name="Email"
            id="login-email"
            placeholder="Tên đăng nhập / Email"
            onChange={(event) => setLoginEmail(event.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            name="Password"
            id="login-password"
            placeholder="Mật khẩu"
            onChange={(event) => setLoginPassword(event.target.value)}
          />
        </div>
        {/* <div className="check-field">
          <input type="checkbox" id="remember-pass" />
          <label htmlFor="remember-pass">Ghi nhớ tài khoản</label>
        </div> */}
        <button
          type="button"
          onClick={() => login()}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
