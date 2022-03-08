import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/userApi";
import FileBase64 from "react-file-base64";

function Register(props) {
  const [isHiddenIcon, setIsHiddenIcon] = useState(true);
  const [messErr, setMessErr] = useState('')
  const hiddenIcon = () => {
    setIsHiddenIcon(!isHiddenIcon);
  };
  const navigate = useNavigate()
  const [cofirmPass, setConfirmPass] = useState('')
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    userName: '',
    attachment: '',
    role: 'client'
  })
  const { email, password, userName } = registerForm
  const OnChangeRegister = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })
    setMessErr('')
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      if (cofirmPass === password) {
        const response = await registerUser(registerForm)
        if (response.data.success)
          navigate('/login')

        console.log(response);
      }
      else {
        setMessErr('Confirm password not success')
      }
    } catch (error) {
      console.log(error);

    }
  }
  console.log(cofirmPass);
  return (
    <Fragment>
      <div className="register">
        <div className="register__heading"> Register </div>
        <form className="register__form" onSubmit={handleRegister}>
          <div className="register__input">
            <span className="fa-solid fa-envelope"></span>
            <input type="email" placeholder="Email" required name="email" onChange={OnChangeRegister} value={email} />
          </div>
          <div className="register__input">
            <span className="far fa-user"></span>
            <input type="text" placeholder="UserName" required name="userName" onChange={OnChangeRegister} value={userName} />
          </div>
          <div className="register__input">
            <span className="fas fa-key"></span>
            <input
              type={`${isHiddenIcon ? "password" : "text"}`}
              placeholder="Password"
              onChange={OnChangeRegister} value={password}
              name='password'
              required
            />
            <div className="hidepassword" onClick={hiddenIcon}>
              {isHiddenIcon ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </div>
          </div>
          <div className="register__input">
            <span className="fas fa-key"></span>
            <input
              type={`${isHiddenIcon ? "password" : "text"}`}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPass(e.target.value)
                setMessErr('')
              }}
              value={cofirmPass}
              name='confirmPassword'
              required
            />
            <div className="hidepassword" onClick={hiddenIcon}>
              {isHiddenIcon ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </div>
          </div>
          <div style={{ margin: "30px 0" }}>
            {/* <p style={{ fontSize: '16px' }}>Chọn ảnh</p> */}
            <FileBase64
              accept="image/*"
              multiple={false}
              type="file "
              value={registerForm.attachment}
              onDone={({ base64 }) =>
                setRegisterForm({ ...registerForm, attachment: base64 })
              }
            />
            {registerForm.attachment && (
              <img

                width={"40%"}
                height={"90%"}
                style={{ margin: "6px ", borderRadius: '10px' }}
                src={registerForm.attachment}
                alt=""
              />
            )}
          </div>
          <span style={{ color: 'red', fontSize: '16px', display: 'block', marginLeft: '4px' }}>{messErr}</span>
          <button type="submit" className="register__btn">
            <span>Register</span>
          </button>
        </form>
        <div className="navigate">
          <Link className="navigate__link" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
