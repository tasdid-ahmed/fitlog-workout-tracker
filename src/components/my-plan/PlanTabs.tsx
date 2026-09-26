"use client";

interface PlanTabsProps {
  activeTab: "today" | "saved";
  onChange: (tab: "today" | "saved") => void;
}

export default function PlanTabs({ activeTab, onChange }: PlanTabsProps) {
  return (
    <div role="tablist" className="tabs tabs-box inline-flex w-fit bg-base-200">
      <button
        type="button"
        role="tab"
        onClick={() => onChange("today")}
        className={`tab font-display uppercase ${activeTab === "today" ? "tab-active" : ""}`}
      >
        Today&apos;s Plan
      </button>
      <button
        type="button"
        role="tab"
        onClick={() => onChange("saved")}
        className={`tab font-display uppercase ${activeTab === "saved" ? "tab-active" : ""}`}
      >
        Saved
      </button>
    </div>
  );
}