import React, {Component} from 'react';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

export default class SignInOrSignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'signUp',
    }
  }

  switch (e) {
    this.setState({
      selected: e.target.value
    })
  }

  render () {
    return (
      <div className="signInOrSignUp">
        <nav>
          <label  className={this.state.selected === "signUp" ? "active" : null}>
            <input type="radio" value="signUp" className="hidestyle"
              checked={this.state.selected === 'signUp'}
              onChange={this.switch.bind(this)}
            /> Register</label>
          <label className={this.state.selected === "signIn" ? "active" : null}>
            <input type="radio" value="signIn" className="hidestyle"
              checked={this.state.selected === 'signIn'}
              onChange={this.switch.bind(this)}
            /> Login</label>
        </nav>
        <div className="panes">
          {this.state.selected === 'signUp' ?
            <SignUpForm formData={this.props.formData}
              onSubmit={this.props.onSignUp}
              onChange={this.props.onChange}
            />
            : null}
          {this.state.selected === 'signIn' ?
            <SignInForm formData={this.props.formData}
              onChange={this.props.onChange}
              onSubmit={this.props.onSignIn}
              onForgotPassword={this.props.onForgotPassword}
            />
            : null}
        </div>
      </div>
    )
  }
}

