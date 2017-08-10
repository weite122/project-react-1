import React, { Component } from 'react';
import './UserDialog.css'
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud'
import ForgotPasswordForm from './ForgotPasswordForm'
import SignInOrSignUp from './SignInOrSignUp'

export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'signInorSignUp',
      formData: {
        email:'',
        username: '',
        password: '',
      }
    }
  }

  signUp(e){
    e.preventDefault()
    let {email,username, password} = this.state.formData
    let success = (user)=>{
      this.props.onSignUp.call(null,user)
    }
    let error = (error)=>{
      switch(error.code){
        default:
        alert(error)
        break  
        case 202:
          alert('用户名已被占用')
          break
        case 126:
        alert('无效的用户 Id，可能用户不存在')
          break
        case 139:  
        alert('角色名称非法，角色名称只能以英文字母、数字或下划线组成')
          break  
      }
    }
    signUp(email,username, password, success, error)
  }
  signIn(e){
    e.preventDefault()
    let {username, password} = this.state.formData
    let success = (user)=>{
      this.props.onSignIn.call(null,user)
    }
    let error = (error)=>{
      switch(error.code){
        default:
        alert(error)
        break   
        case 210:
        alert('用户名与密码不匹配')
        break
        case 200:
        alert('没有提供用户名，或者用户名为空')
        break
        case 201:
        alert('没有提供密码，或者密码为空')
        break
        case 211:
        alert('找不到用户')
        break
      }
    }
    signIn(username, password, success, error)
  }
  changeFormData(key, e){
    let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
    stateCopy.formData[key] = e.target.value
    this.setState(stateCopy)
  }
  render(){
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          {
             this.state.selectedTab === 'signInOrSignUp' ?
               <SignInOrSignUp
                 formData={this.state.formData}
                 onSignIn={this.signIn.bind(this)}
                 onSignUp={this.signUp.bind(this)}
                 onChange={this.changeFormData.bind(this)}
                 onForgotPassword={this.showForgotPassword.bind(this)}
               /> :
              <ForgotPasswordForm
                formData={this.state.formData}
                onSubmit={this.resetPassword.bind(this)}
                onChange={this.changeFormData.bind(this)}
                onSignIn={this.returnToSignIn.bind(this)}
             />
           }
        </div>
      </div>
    )
  }
  showForgotPassword(){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = "forgotPassword"
    this.setState(stateCopy)
  }
  returnToSignIn(){
     let stateCopy = JSON.parse(JSON.stringify(this.state))
     stateCopy.selectedTab = 'signInOrSignUp'
     this.setState(stateCopy)
   }
  resetPassword(e){
    e.preventDefault()
    sendPasswordResetEmail(this.state.formData.email)
  }
}

