// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isBothEmpty: false,
    isFirstEmpty: false,
    isLastEmpty: false,
    isValid: true,
  }

  onChangingFirstName = event => {
    const {firstName} = this.state
    this.setState({firstName: event.target.value})
  }

  onChangingLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmittingForm = () => {
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({isBothEmpty: true, isValid: false})
    } else if (firstName === '') {
      this.setState({isFirstEmpty: true, isValid: false})
    } else if (lastName === '') {
      this.setState({isLastEmpty: true, isValid: false})
    }
  }

  render() {
    const {isFirstEmpty, isLastEmpty, isBothEmpty, isValid} = this.state
    return (
      <div className="main-container">
        <h1 className="heading-registration">Registration</h1>
        <form className="form-container" onSubmit={this.onSubmittingForm}>
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            placeholder="FIRST NAME"
            className="input-element-style"
            id="firstName"
            type="text"
            onBlur={this.onChangingFirstName}
          />
          {isBothEmpty ? <p>*Required</p> : ''}
          {isFirstEmpty ? <p>*Required</p> : ''}
          <label htmlFor="lastName">LAST NAME</label>
          <input
            placeholder="LAST NAME"
            className="input-element-style"
            id="lastName"
            type="text"
            onBlur={this.onChangingLastName}
          />
          {isBothEmpty ? <p>*Required</p> : ''}
          {isLastEmpty ? <p>*Required</p> : ''}
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
