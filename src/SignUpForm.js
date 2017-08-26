import React from 'react';
export default function (props) {
  return (
    <form className="signUp" onSubmit={props.onSubmit.bind(this)}> {/* 注册*/}
      <div className="row">
        <label>Email</label>
        <input type="text" value={props.formData.email}
          onChange={props.onChange.bind(null, 'email')}/>
      </div>
      <div className="row">
        <label>Username</label>
        <input type="text" value={props.formData.username}
          onChange={props.onChange.bind(null, 'username')}/>
        {/* bind 不仅可以绑定 this，还可以绑定第一个参数 */}
      </div>
      <div className="row">
        <label>Password</label>
        <input type="password" value={props.formData.password}
          onChange={props.onChange.bind(null, 'password')}/>
      </div>
      <div className="row actions">
        <button type="submit" className="register">Register</button>
      </div>
    </form>
  )
}