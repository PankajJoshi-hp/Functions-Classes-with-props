import React from "react";

const App = () => {
  return <Tick />;
};

class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      // console.log("Updating the state");
      this.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  updateTime() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

export default App;
