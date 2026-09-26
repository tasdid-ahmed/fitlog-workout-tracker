interface CategoryTagProps {
  label: string;
}

export default function CategoryTag({ label }: CategoryTagProps) {
  return (
    <span className="badge badge-primary badge-sm px-3 font-display font-bold uppercase tracking-wide">
      {label}
    </span>
  );
}