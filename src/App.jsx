import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Goals } from "./components/pages/Goals";
import { GoalShow } from "./components/pages/GoalShow";

function App() {
  return (
    <BrowserRouter>
      <Layout >

      <Routes>
        <Route path="/" element={<Goals />} />
        <Route path="/goals/{id}" element={<GoalShow />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
