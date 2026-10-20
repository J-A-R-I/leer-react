export default function Button({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const baseStyles =
    "h-12 min-w-0 flex items-center justify-center rounded-xl border text-sm outline-none transition active:scale-95 focus:ring-2 focus:ring-blue-100 p-3";

  const variantStyles = {
    default:
      "bg-white border-slate-200 text-slate-800 font-semibold hover:bg-slate-100 hover:border-slate-300",
    action:
      "bg-slate-100 border-slate-200 text-slate-700 font-semibold hover:bg-slate-200 hover:border-slate-300",
    operator:
      "bg-blue-50 border-blue-200 text-blue-600 font-bold text-base hover:bg-blue-100 hover:border-blue-300",
    primary:
      "bg-blue-600 border-blue-600 text-white font-bold text-base hover:bg-blue-700 shadow-sm",
    delete:
      "bg-red-50 border-red-200 text-red-600 font-bold text-base hover:bg-red-100 hover:border-red-300",

  };

  const selectedVariant = variantStyles[variant] || variantStyles.default;

  return (
    <button
      {...props}
      className={`${baseStyles} ${selectedVariant} ${className}`}
    >
      {children}
    </button>
  );
}

