import { useEffect, useState } from "react";
import Card from "./Card";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const dateString = time.toLocaleDateString("nl-BE", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <Card title="Klok">
      <div className="-mt-3 flex items-center justify-between rounded-xl border border-blue-100/60 bg-gradient-to-r from-blue-50/70 via-white to-slate-50 px-3.5 py-2">
        <div className="text-left">
          <div className="flex items-baseline font-mono leading-none">
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 tabular-nums">
              {hours}:{minutes}:{seconds}
            </span>
          </div>
          <p className="mt-1 text-[11px] font-medium capitalize text-slate-500">
            {dateString}
          </p>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </span>
          <span>Live</span>
        </div>
      </div>
    </Card>
  );
}
