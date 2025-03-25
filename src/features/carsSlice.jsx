import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
    updateCar: (state, action) => {
      const { id, placa, numeroSerie, modelo, marca, kilometraje, tipo } =
        action.payload;
      const Foundcar = state.find((car) => car.id === id);
      if (Foundcar) {
        Foundcar.placa = placa;
        Foundcar.numeroSerie = numeroSerie;
        Foundcar.modelo = modelo;
        Foundcar.marca = marca;
        Foundcar.kilometraje = kilometraje;
        Foundcar.tipo = tipo;
      }
    },
  },
});

export const { addCars, deleteCars, updateCar } = carsSlice.actions;
export default carsSlice.reducer;
