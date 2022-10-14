import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="login" />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />

          <Route exact path="/home" element={<Home />} />
          <Route path="home/adduser" element={<AddUser />} />
          <Route path="home/edituser/:id" element={<EditUser />} />
          <Route path="home/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
