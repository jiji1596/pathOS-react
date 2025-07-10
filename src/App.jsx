import { useEffect } from "react";
import { Layout } from "./components/Layout";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/goals")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
  <Layout>
  </Layout>);
}

export default App;
