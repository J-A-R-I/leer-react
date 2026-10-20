import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import Tasklist from "./components/TaskList";
import Weather from "./components/Weather";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="m-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">React</h1>

        <p className="mb-8 text-slate-500">
          Mijn React-oefeningen en experimenten.
        </p>

        <div className="grid grid-cols-3 w-auto items-start gap-6">
          <div className="flex flex-col gap-6">
            <Counter />
            <Weather />
          </div>
          <Tasklist />
          <Calculator />
        </div>
      </div>
    </main>
  );
}
