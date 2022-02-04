import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">mtb bike shop</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />}></Route>
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
