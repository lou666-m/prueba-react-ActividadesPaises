import { useContext, useRef } from "react";
import { ActividadContext } from "../context/ActividadContext";

function ActividadForm() {
  const nombreActividad = useRef();
  const descriptionActividad = useRef();
  const { createActividad } = useContext(ActividadContext);

  function onSubmit(e) {
    e.preventDefault();
    createActividad({
      title: nombreActividad.current.value,
      description: descriptionActividad.current.value,
    });
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={onSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">
          Crea tu actividad
        </h1>
        <input
          ref={nombreActividad}
          type="nombreText"
          id="nombreText"
          placeholder="Escribe tu actividad"
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <h2 className="text-2xl font-bold text-white mb-3">
          Descripción de la actividad
        </h2>
        <textarea
          ref={descriptionActividad}
          placeholder="Escribe tu descripción"
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button
          className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ActividadForm;
