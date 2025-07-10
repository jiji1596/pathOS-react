import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./components/pages/About";
import { Goals } from "./components/pages/Goals";

function App() {
  return (
    <BrowserRouter>
      <Layout >

      <Routes>
        <Route path="/" element={<Goals />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
