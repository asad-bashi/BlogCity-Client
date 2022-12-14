import { useState, createContext, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";
import CreateAccount from "./pages/CreateAccount";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FullBLog from "./pages/FullBlog";
import Logout from "./pages/Logout";
import EditBlog from "./pages/EditBlog";
import Error from "./pages/Error";
import EditComment from "./pages/EditComment";
import ProfilePage from "./pages/ProfilePage";

axios.defaults.withCredentials = true;

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function isAuth() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BASE_URL}api/isAuth`
        );
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    }
    isAuth();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs">
            <Route path="new" element={<CreateBlog />} />
            <Route path=":id" element={<FullBLog />} />
            <Route path=":id/edit" element={<EditBlog />} />
          </Route>
          <Route path="/comments/:id/edit" element={<EditComment />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/accounts/new" element={<CreateAccount />} />
          <Route path="/accounts/:id" element={<ProfilePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
