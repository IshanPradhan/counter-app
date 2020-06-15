import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); //to change current counter object
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  removeItem = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
        <button
          onClick={this.removeItem}
          className={"btn btn-secondary btn-sm"}
        >
          Remove
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //classes += this.state.count === 0 ? "warning" : "primary";
    if (this.state.count === 0) {
      classes += "warning";
    } else if (this.state.count > 0) {
      classes += "primary";
    } else {
      classes += "danger";
    }
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
