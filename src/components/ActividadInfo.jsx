import { useContext } from "react";
import { ActividadContext } from "../context/ActividadContext";

function ActividadInfo({ paisIndicado }) {
  const { actividades, deleteActividad } = useContext(ActividadContext);

  if (paisIndicado === undefined || actividades.length === 0) {
    return (
      <h1 className="text-2xl font-bold text-yellow-50">
        No hay actividades, aún.
      </h1>
    );
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-2xl font-bold capitalize p-4">
        Lista de Actividades
      </h1>
      {actividades.map((actividad, i) => (
        <div key={i}>
          <h2 className="text-xl font-bold">{actividad.title}</h2>
          <p>{actividad.description}</p>
          <button
            className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
            onClick={() => deleteActividad(actividad.id)}
          >
            Eliminar Actividad
          </button>
        </div>
      ))}
    </div>
  );
}

export default ActividadInfo;
