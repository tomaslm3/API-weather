import { Route } from "react-router-dom";
import Nav from "../../components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Route path={'/'} component={Nav} />
    </div>
  );
}

export default App;
