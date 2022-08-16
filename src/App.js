import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateAccount from "./pages/CreateAccount";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/new" element={<CreateBlog />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/accounts/new" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
