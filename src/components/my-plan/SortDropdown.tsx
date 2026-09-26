"use client";

type SortKey = "duration" | "calories" | "rating";

interface SortDropdownProps {
  value: SortKey;
  onChange: (value: SortKey) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <label className="flex items-center gap-2 whitespace-nowrap text-sm text-base-content/60">
      Sort By
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="select select-sm w-auto font-display uppercase"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </label>
  );
}