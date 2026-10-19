import { Trash2 } from "lucide-react";

export default function TaskItem({ item, onDelete }) {
  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md">
      <span className="flex-1 text-sm font-medium text-gray-800">{item}</span>

      <button
        type="button"
        onClick={onDelete}
        className="flex items-center gap-2 rounded-lg p-2 text-red-500 transition hover:bg-red-50 hover:text-red-700"
        aria-label={`Verwijder ${item}`}
      >
        {/* <span className="text-sm">Verwijderen</span> */}
        <Trash2 size={18} />
      </button>
    </li>
  );
}
