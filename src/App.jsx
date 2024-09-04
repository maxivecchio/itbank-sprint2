import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

const Home = () => {
  const user = true;
  return user ? <h1>Home</h1> : <h1>login</h1>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
