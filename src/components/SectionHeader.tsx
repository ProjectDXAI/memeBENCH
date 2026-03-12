"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-8 border-b border-[#2a2a2a] pb-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-[#777]">{subtitle}</p>
      )}
    </div>
  );
}
