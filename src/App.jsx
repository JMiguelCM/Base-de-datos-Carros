import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import CarsForm from "./components/carsForm";
import CarsList from "./components/carsList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarsList />} />
          <Route path="/create-car" element={<CarsForm/>} />
          <Route path="/edit-car/:id" element={<CarsForm/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
