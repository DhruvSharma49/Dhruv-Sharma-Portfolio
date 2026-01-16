export default function Button({ as: Tag = "button", className = "", children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}