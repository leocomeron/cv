import Information from "./components/Principal.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Information />
      </Route>
    </div>
  );
}

export default App;
