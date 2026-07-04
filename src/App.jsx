import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Chat from "./pages/Chat";
import OceanData from "./pages/OceanData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ocean-data" element={<OceanData />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;