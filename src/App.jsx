import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import { paths } from "./routes/paths";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Dashboard />} exact path={paths.Root} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
