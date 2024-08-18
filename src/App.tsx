// import { useState } from "react";
import Dashboard from "./Dashboard";
// import LoadingSpinner from "./components/Spinner";
import "./App.css";
import "../i18n";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div style={{ height: "100vh" }}>
      <Dashboard />
      {/* <LoadingSpinner /> */}
    </div>
  );
}

export default App;
