import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function Card({ title, description, children }: CardProps) {
  return (
    <section className="text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>

        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}
