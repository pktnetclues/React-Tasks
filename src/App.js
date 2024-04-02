import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/01-04/Home";
import ListData from "./Components/01-04/ListData";
import AddBook from "./Components/01-04/AddBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/listdata" element={<ListData />} />
      </Routes>
    </Router>
  );
}

export default App;
