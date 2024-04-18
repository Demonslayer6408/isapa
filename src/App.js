import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import PageNotFound from "./pages/pagenotfound";
import Main from "./pages/main";
import Home from "./pages/home";
import About from "./pages/main_pages/about";
function App() {
  return (
    <div>
      <Routes>
      <Route index element={<Login />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="main" element={<Main/>}>
            <Route index element={<Home />} />
            <Route path="home" element ={<Home/>}></Route>
            <Route path="about" element ={<About/>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
