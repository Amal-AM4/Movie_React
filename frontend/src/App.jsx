import "./App.css";

function App() {
  return (
    <>
      <Text display="What's up" test="ger" />
      <Text display={"Hello"}></Text>
    </>
  );
}

function Text({display, test}) {
  return (
    <div>
      <p>{display} - {test}</p>
    </div>
  );
}

export default App;
