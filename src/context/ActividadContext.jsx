import { createContext } from "react";
import {
  actividades as data,
  paises as paisesData,
} from "../data/ActividadData";
import { useState, useEffect } from "react";

export const ActividadContext = createContext();

export function ActividadContextProvider(props) {
  const [actividades, setActividades] = useState(data); // Aquí estoy pasando los datos que hemos creado en ActividadData.js

  const [paises, setPaises] = useState(paisesData); // Pasando datos de paises

  function obtenerNumeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function colorTemperatura(temp) {
    if (temp == 5 || temp <= 15) {
      return "frio";
    } else if (temp == 16 || temp <= 25) {
      return "rico";
    } else if (temp == 26 || temp <= 45) {
      return "caliente";
    }
  }

  function deleteActividad(actividadId) {
    setActividades(
      actividades.filter((actividad) => actividad.id !== actividadId)
    );
  }

  function createActividad(actividad) {
    setActividades([
      ...actividades,
      {
        title: actividad.title,
        id: actividades.length,
        description: actividad.description,
      },
    ]);
  }

  useEffect(() => {
    setActividades(data);
    setPaises(paisesData);
  }, []);

  return (
    <ActividadContext.Provider
      value={{
        actividades,
        paises,
        obtenerNumeroRandom,
        colorTemperatura,
        deleteActividad,
        createActividad,
      }}
    >
      {props.children}
    </ActividadContext.Provider>
  );
}
