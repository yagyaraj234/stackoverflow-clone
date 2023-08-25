import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
