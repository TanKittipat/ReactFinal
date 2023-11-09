import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Add, Edit, List, Detail } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <h1>Computer CRUD</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/computer/add" element={<Add />}></Route>
            <Route path="/computer/edit/:id" element={<Edit />}></Route>
            <Route path="/computer/detail/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
