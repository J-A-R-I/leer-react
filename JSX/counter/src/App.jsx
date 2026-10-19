import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  function handleCount(event) {
    const id = event.currentTarget.id;

    if (id === "countplus") {
      setCount((c) => c + 1);
    } else if (id === "countmin") {
      setCount((c) => Math.max(0, c - 1));
    }
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 font-sans text-white">
      <section className="w-full max-w-sm rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
          Counter
        </p>

        <div className="mb-8 text-8xl font-extrabold tracking-tight text-violet-300 tabular-nums">
          {count}
        </div>

        <div className="flex gap-3">
          <button
            id="countplus"
            onClick={handleCount}
            className="flex-1 rounded-xl bg-violet-600 px-5 py-3.5 font-bold transition hover:-translate-y-0.5 hover:bg-violet-500 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          >
            + 1
          </button>

          <button
            id="countmin"
            onClick={handleCount}
            className="flex-1 rounded-xl bg-slate-700 px-5 py-3.5 font-bold transition hover:-translate-y-0.5 hover:bg-slate-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          >
            − 1
          </button>
        </div>
      </section>
    </main>
  );
}
