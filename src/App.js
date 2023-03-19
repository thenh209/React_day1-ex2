import './App.css';
function App() {
  return (
    <div id="div1">
     <h2 id="h1">Reference Data Types use same memory</h2>
     <button id="btn1"onClick={window["Test"]}>Refernce Data Types and call the function</button>
    </div>
  );
}

export default App;
