import React from "react";

class ClassForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    gender: "",
    showDetails: false,

    showName: "",
    showEmail: "",
    showPass: "",
    showGender: "",
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      showDetails: true,
      showName: this.state.name,
      showEmail: this.state.email,
      showPass: this.state.password,
      showGender: this.state.gender,

      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.submitForm}>
          <h3>Form</h3>
          <div className="form-data">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              placeholder="Enter Your Name"
              required
            />

            <label htmlFor="email">Email: </label>
            <input
              type="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              placeholder="Enter Your Email"
              required
            />

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              placeholder="Enter Your Password"
              required
            />

            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  id="Male"
                  value="Male"
                  onChange={(e) => {
                    this.setState({ gender: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="Male">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  id="Female"
                  value="Female"
                  onChange={(e) => {
                    this.setState({ gender: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="Female">
                  Female
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>

        <div>
          <p>
            {this.state.showDetails ? (
              <>
                Name: {this.state.showName} <br />
                Email: {this.state.showEmail} <br />
                Password : {this.state.showPass} <br />
                Gender: {this.state.showGender}
              </>
            ) : null}
          </p>
        </div>
      </div>
    );
  }
}

export default ClassForm;
