import {Redirect} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'
import './login.css'

const Login = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }

  const onFormSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onFormSubmitFailure = errorMsg => {
    setIsLoading(false)
    setErrMsg(errorMsg)
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      onFormSubmitSuccess(data.jwt_token)
    } else {
      onFormSubmitFailure(data.error_msg)
    }
  }

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSkipLogin = async () => {
    setIsLoading(true)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: 'rahul',
        password: 'rahul@2021',
      }),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      onFormSubmitSuccess(data.jwt_token)
    } else {
      onFormSubmitFailure(data.error_msg)
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="login-loading-container">
          <img
            src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728546141/Grouplogo_y1s5s2.svg"
            alt="login website logo"
            className="loading-logo"
          />
          <h1 className="loading">Loading...</h1>
        </div>
      ) : (
        <div className="login-main-container">
          <div className="login-sub-container">
            <div className="logo-and-title-container">
              <img
                src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728546141/Grouplogo_y1s5s2.svg"
                alt="login website logo"
                className="login-logo"
              />
              <h1 className="login-title">Spotify Remix</h1>
            </div>
            <form onSubmit={handleFormSubmit} className="form-container">
              <label htmlFor="username">USERNAME</label>
              <input onChange={handleUsername} type="text" id="username" />
              <label htmlFor="password">PASSWORD</label>
              <input onChange={handlePassword} type="password" id="password" />
              {errMsg && <p className="err-msg-para">*{errMsg}</p>}
              <div className="login-btn-container">
                <button type="submit">LOGIN</button>
              </div>
              <div className="skip-btn-container">
                <button
                  onClick={handleSkipLogin}
                  className="skip-btn"
                  type="button"
                >
                  Skip Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
export default Login
