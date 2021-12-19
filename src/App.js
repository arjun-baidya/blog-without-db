import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import PostBlog from "./Components/Blog/PostBlog";
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <h1>Blog and Login-Registration using Local-storage</h1>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/"  />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/postBlog" element={<PostBlog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
