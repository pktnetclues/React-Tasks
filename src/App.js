import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/01-04/Home";
import ListData from "./Components/01-04/ListData";
import AddBook from "./Components/01-04/AddBook";
import Header from "./Components/01-04/Header";
import Login from "./Components/01-04/Login";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <Header />
      <Toaster richColors position="top-right" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/listdata" element={<ListData />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
