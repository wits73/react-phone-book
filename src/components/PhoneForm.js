import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui form">
          <div className="three fields">
            <div className="field">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input 
                type="text" 
                placeholder="Phone Number"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
              />
            </div>
            <div className="field">
              <label>Submit</label>
              <button className="ui secondary button">
                Okay
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PhoneForm;
