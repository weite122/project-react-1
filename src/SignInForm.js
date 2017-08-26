import React from 'react';
export default function (props) {
  return (
    <form className="signIn" onSubmit={props.onSubmit}> {/* 登录*/}
      <div className="row">
        <label>Username</label>
        <input type="text" value={props.formData.username}
          onChange={props.onChange.bind(null, 'username')}/>
      </div>
      <div className="row">
        <label>Password</label>
        <input type="password" value={props.formData.password}
          onChange={props.onChange.bind(null, 'password')}/>
      </div>
      <div className="row actions">
        <button type="submit" className="login">Login</button>
        <a href="#" onClick={props.onForgotPassword}>Forget password？</a>
      </div>
    </form>
  )
}