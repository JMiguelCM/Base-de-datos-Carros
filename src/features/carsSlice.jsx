import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    placa: "ABC-123",
    numeroSerie: "123XYZ789",
    modelo: "Sedán",
    marca: "Toyota",
    kilometraje: "50000",
    tipo: "Gasolina",
  },
  {
    id: 2,
    placa: "MIK-456",
    numeroSerie: "456ABC789",
    modelo: "hatchback",
    marca: "Nissan",
    kilometraje: "30000",
    tipo: "Gasolina",
  },
];

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCars: (state, action) => {
      state.push(action.payload);
    },
    deleteCars: (state, action) => {
      const carsFound = state.find((car) => car.id === action.payload);
      if (carsFound) {
        return state.filter((car) => car.id !== action.payload);
      }
    },
  },
});

export const { addCars,deleteCars } = carsSlice.actions;
export default carsSlice.reducer;
