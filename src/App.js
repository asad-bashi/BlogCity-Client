import { useState, createContext, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";
import CreateAccount from "./pages/CreateAccount";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FullBLog from "./pages/FullBlog";

axios.defaults.withCredentials = true;

export const UserContext = createContext();
function App() {
  const [isAuthenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    async function isAuth() {
      const { data } = await axios.get("http://localhost:5000/api/isAuth");
      setAuthenticated(data);
    }
    isAuth();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs">
            <Route path="new" element={<CreateBlog />} />
            <Route path=":id" element={<FullBLog />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/accounts/new" element={<CreateAccount />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
