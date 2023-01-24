import ActividadPais from "./components/ActividadPais";
import ActividadForm from "./components/ActividadForm";

function App() {
  return (
    <main className="bg-zinc-500 h-screen">
      <div className="container mx-auto p-10">
        <ActividadForm />
        <ActividadPais />
      </div>
    </main>
  );
}

export default App;
