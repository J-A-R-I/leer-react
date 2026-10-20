import { Trash2 } from "lucide-react";
import Button from "./Button";

export default function TaskItem({ item, onDelete }) {
  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md">
      <span className="flex-1 text-sm font-medium text-gray-800">{item}</span>

      <Button variant="delete" onClick={onDelete}>
        <Trash2 size={18} />
      </Button>
    </li>
  );
}
