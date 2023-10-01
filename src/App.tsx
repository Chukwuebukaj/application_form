import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import TemplatePage from "./pages/ApplicationTemplate/TemplatePage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<TemplatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
