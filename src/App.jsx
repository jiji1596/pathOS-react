import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./components/pages/About";

function App() {
  return (
    <BrowserRouter>
      <Layout />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
