// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstEmpty: false,
    isLastEmpty: false,
    isValid: false,
  }

  onChangingFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangingLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmittingForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({isFirstEmpty: true, isLastEmpty: true, isValid: false})
    } else if (firstName === '') {
      this.setState({isFirstEmpty: true, isValid: false})
    } else if (lastName === '') {
      this.setState({isLastEmpty: true, isValid: false})
    } else {
      this.setState({isValid: true})
    }
  }

  renderRegistration = () => {
    const {isFirstEmpty, isLastEmpty} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmittingForm}>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          placeholder="FIRST NAME"
          className="input-element-style"
          id="firstName"
          type="text"
          onBlur={this.onChangingFirstName}
        />
        {isFirstEmpty ? <p>Required</p> : ''}
        <label htmlFor="lastName">LAST NAME</label>
        <input
          placeholder="LAST NAME"
          className="input-element-style"
          id="lastName"
          type="text"
          onBlur={this.onChangingLastName}
        />
        {isLastEmpty ? <p>Required</p> : ''}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  submitAnotherResponse = () => {
    this.setState({isValid: false})
  }

  renderSuccess = () => (
    <div className="successful-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        className="button"
        type="button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isValid} = this.state
    console.log(isValid)
    return (
      <div className="main-container">
        <h1 className="heading-registration">Registration</h1>
        {isValid ? this.renderSuccess() : this.renderRegistration()}
      </div>
    )
  }
}

export default RegistrationForm
