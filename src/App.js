import { Routes,Route } from "react-router";
import Home from "./routes/home/home.component";
import Navbar from "./components/navigation/nav.component";
import Login from "./routes/login/login.component";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
