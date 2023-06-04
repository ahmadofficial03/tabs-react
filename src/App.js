import { useState } from "react";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader />;
  }
  return <div className="App">App</div>;
}

export default App;
