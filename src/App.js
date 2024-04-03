import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/01-04/Home";
import AddBook from "./Components/01-04/AddBook";
import Header from "./Components/01-04/Header";
import Login from "./Components/01-04/Login";
import { Toaster } from "sonner";
import Register from "./Components/01-04/Register";
import { UserContextProvider } from "./Components/01-04/Context/UserContext";
import ListBooks from "./Components/01-04/ListBooks";
import Profile from "./Components/01-04/Profile";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Toaster richColors position="top-right" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/listBooks" element={<ListBooks />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
