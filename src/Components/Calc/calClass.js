import React from "react";

class CalClass extends React.Component {
  constructor() {
    super();
    this.state = {
      fNum: "",
      sNum: "",
      output: "",
    };
  }

  addFun(e) {
    e.preventDefault();
    this.setState({
      output: parseFloat(this.state.fNum) + parseFloat(this.state.sNum),
    });
  }

  subFun(e) {
    e.preventDefault();
    this.setState({
      output: parseFloat(this.state.fNum) - parseFloat(this.state.sNum),
    });
  }

  mulFun(e) {
    e.preventDefault();
    this.setState({
      output: parseFloat(this.state.fNum) * parseFloat(this.state.sNum),
    });
  }

  divFun(e) {
    e.preventDefault();
    this.setState({
      output: parseFloat(this.state.fNum) / parseFloat(this.state.sNum),
    });
  }

  render() {
    return (
      <>
        <div className="form-data">
          <h4>Using Class Component</h4>
          <form className="form">
            <input
              type="number"
              value={this.state.fNum}
              onChange={(e) => {
                this.setState({ fNum: e.target.value });
              }}
              placeholder="Enter First Num"
            />
            <input
              type="number"
              value={this.state.sNum}
              onChange={(e) => {
                this.setState({ sNum: e.target.value });
              }}
              placeholder="Enter Second Num"
            />
            <p
              style={{
                fontSize: "20px",
              }}
            >
              {this.state.output}
            </p>
            <button onClick={(e) => this.addFun(e)}>Add</button>
            <button onClick={(e) => this.subFun(e)}>Substract</button>
            <button onClick={(e) => this.mulFun(e)}>Multiply</button>
            <button onClick={(e) => this.divFun(e)}>Divide</button>
          </form>
        </div>
      </>
    );
  }
}

export default CalClass;
