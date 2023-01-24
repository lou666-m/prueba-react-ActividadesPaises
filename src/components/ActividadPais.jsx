import { useContext, useState } from "react";
import { ActividadContext } from "../context/ActividadContext";
import "../lista-paises.css";
import Select from "react-select";
import ActividadInfo from "./ActividadInfo";

function ActividadPais() {
  const { paises, obtenerNumeroRandom, colorTemperatura } =
    useContext(ActividadContext);
  const [paisIndicado, setPaisIndicado] = useState();
  const vartemp = obtenerNumeroRandom(5, 45);

  const paisSeleccionado = ({ value }) => {
    setPaisIndicado(value);
  };

  return (
    <div className="max-w-md mx-auto grid-cols-4 gap-2">
      <div className={paisIndicado ? colorTemperatura(vartemp) : ""}>
        <p className="text-black font-bold">Selecciona un País</p>
        <Select
          placeholder="Selecciona un país"
          options={paises}
          onChange={paisSeleccionado}
        />
        <h1>
          {paisIndicado ? (
            <p className="text-black font-bold">País: {paisIndicado}</p>
          ) : (
            ""
          )}
        </h1>
        <h2>
          {paisIndicado ? (
            <p className="text-black font-bold">
              Temperatura de {vartemp} C grados
            </p>
          ) : (
            <p className="text-black font-bold">No has seleccinado un país</p>
          )}
        </h2>
        <br />
        <ActividadInfo paisIndicado={paisIndicado} />
      </div>
    </div>
  );
}

export default ActividadPais;
