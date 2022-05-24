
function App() {
  return (
    <div className="app">
      <div className="square">
        <p>No color</p>
      </div>
      <label htmlFor="colorInput">
        <input
          type="text"
          name="colorInput"
          id="colorInput"
          placeholder="Type a color here"
        />
      </label>
    </div>
  );
}

export default App;
