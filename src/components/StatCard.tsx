"use client";

interface StatCardProps {
  value: string | number;
  label: string;
  color?: string;
  className?: string;
}

export default function StatCard({ value, label, color, className }: StatCardProps) {
  return (
    <div className={`mii-card p-6 ${className ?? ""}`}>
      <div
        className="text-3xl font-bold"
        style={{ color: color ?? "#ffffff" }}
      >
        {value}
      </div>
      <div className="mt-1 text-sm text-[#777]">{label}</div>
    </div>
  );
}
