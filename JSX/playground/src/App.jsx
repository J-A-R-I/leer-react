import Counter from "./components/Counter";
import Tasklist from "./components/TaskList";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="m-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">React</h1>

        <p className="mb-8 text-slate-500">
          Mijn React-oefeningen en experimenten.
        </p>

        <div className="grid grid-cols-3 w-auto items-start gap-6">
          <Counter />
          <Tasklist />
        </div>
      </div>
    </main>
  );
}
