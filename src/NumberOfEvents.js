import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      query: 32,
      errorText: "",
    };
  }

  handleInputChanged = (event) => {
    let value = parseInt(event.target.value);

    if (value < 1 || value > 32) {
      this.setState({
        numberofevents: value,
        errorText: "Select a number from 1 to 32.",
      });
    } else {
      this.setState({
        numberofevents: value,
        errorText: "",
      });
    }

    this.props.updateEvents(value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="numberOfEvents"
          min={1}
          max={32}
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert className="errorMessage" text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
