import React, { Fragment, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAdmin } from "../../../api/store/actions/adminAction";
import { userSetAuth } from "../../../api/store/actions/usersAction";
import { loginUser } from "../../../api/userApi";
import { AuthContext } from "../../authContext/AuthContext";
import { TOKEN_NAME } from "../../authContext/constant";

function Login(props) {
  const [isHiddenIcon, setIsHiddenIcon] = useState(true);
  const navigate = useNavigate()
  const [messErr, setMessErr] = useState('')
  const authContext = useContext(AuthContext)
  if (authContext.isAuthentication === true)
    navigate('/')


  const hiddenIcon = () => {
    setIsHiddenIcon(!isHiddenIcon);
  };
  const dispatch = useDispatch()
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',

  })
  const { email, password } = loginForm
  const onChangeLogin = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    setMessErr('')

  }
  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await loginUser(loginForm)
      if (response.data.success) {
        dispatch(userSetAuth(response.data.user))
        if (response.data.isAdmin)
          dispatch(setAdmin(response.data.user))
        localStorage.setItem(TOKEN_NAME, response.data.accessToken)
        navigate('/')
      }
      if (!response.data.success) {
        setMessErr(response.data.message)
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <Fragment>
      <div className="login">
        <div className="login__heading"> LOGIN </div>
        <form className="login__form" onSubmit={login}>
          <div className="login__input">
            <span className="far fa-user"></span>
            <input type="text"
              required
              name="email"
              placeholder="Email"
              onChange={onChangeLogin}
              value={email} />
          </div>
          <div className="login__input">
            <span className="fas fa-key"></span>
            <input
              required
              type={`${isHiddenIcon ? "password" : "text"}`}
              name='password'
              onChange={onChangeLogin}

              placeholder="Password"
              value={password}
            />
            <div className="hidepassword" onClick={hiddenIcon}>
              {isHiddenIcon ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </div>
          </div>
          <span style={{ color: 'red', fontSize: '14px', marginLeft: '4px' }}>{messErr}</span>
          <button type="submit" className="login__btn">
            <span >Login</span>
          </button>
        </form>
        <div className="navigate">
          <span className="navigate__desc">Don't you have acount ?</span>
          <Link className="navigate__link" to={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
