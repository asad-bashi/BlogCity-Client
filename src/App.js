import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
