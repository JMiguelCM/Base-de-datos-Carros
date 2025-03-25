import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import CarsForm from "./components/carsForm";
import CarsList from "./components/carsList";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CarsList />} />
            <Route path="/create-car" element={<CarsForm />} />
            <Route path="/edit-car/:id" element={<CarsForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
