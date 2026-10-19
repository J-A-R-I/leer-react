import { useState } from "react";
import Card from "./Card.jsx";
import TaskItem from "./TaskItem";

export default function Tasklist() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (input.trim() === "") return;

    setItems((prev) => [
      ...prev,
      input.charAt(0).toUpperCase() + input.slice(1),
    ]);
    setInput("");
  }

  function deleteItem(index) {
    setItems((prev) => prev.filter((item, i) => i !== index));
  }

  return (
    <>
      <Card title="Tasklist" description="Tasklist met React">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="task-input"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Mijn taken
            </label>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                addItem();
              }}
              className="flex gap-2"
            >
              <input
                id="task-input"
                type="text"
                placeholder="Welke taak wil je toevoegen?"
                className="h-11 min-w-0 flex-1 rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />

              <button
                type="submit"
                className="flex h-11 shrink-0 items-center gap-2 rounded-xl bg-blue-700 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 active:scale-95"
              >
                <span className="text-lg leading-none">+</span>
                Toevoegen
              </button>
            </form>
          </div>

          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-semibold text-slate-800">Takenlijst</h3>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {items.length} {items.length === 1 ? "taak" : "taken"}
            </span>
          </div>

          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
              <p className="text-sm font-medium text-slate-600">
                Nog geen taken
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Voeg hierboven je eerste taak toe.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-2">
              {items.map((item, index) => (
                <TaskItem
                  key={index}
                  item={item}
                  onDelete={() => deleteItem(index)}
                />
              ))}
            </ul>
          )}
        </div>
      </Card>
    </>
  );
}
