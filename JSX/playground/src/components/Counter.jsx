import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card title="Counter" description="optellen aftellen.">
      <div className="flex gap-4 text-center justify-center">
        <span className="text-3xl font-bold text-slate-900">{count}</span>

        <div className="flex gap-2">
          <Button variant="primary" onClick={() => setCount(count + 1)}>+1</Button>
          <Button variant="delete" onClick={() => setCount(Math.max(0, count - 1))}>-1</Button>

        </div>
      </div>
    </Card>
  );
}
