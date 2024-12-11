const App = () => {
  return <Tick date={new Date()} />;
};

const Tick = ({ date }) => {
  return (
    <div>
      <h1>Hello! World</h1>
      <h1>It is {date.toLocaleTimeString()}</h1>
    </div>
  );
};

setInterval(App, 1000);

export default App;

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   root.render(<Clock date={new Date()} />);
// }

// setInterval(tick, 1000);
