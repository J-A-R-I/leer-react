import { useState } from "react";
import Card from "./Card";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card title="Counter" description="optellen aftellen.">
      <div className="flex gap-4 text-center justify-center">
        <span className="text-3xl font-bold text-slate-900">{count}</span>

        <div className="flex gap-2">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            +
          </button>
          <button
            onClick={() => setCount(Math.max(0, count - 1))}
            className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200"
          >
            −
          </button>
        </div>
      </div>
    </Card>
  );
}
