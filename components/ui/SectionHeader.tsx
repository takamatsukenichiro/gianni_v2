type SectionHeaderProps = {
  label: string;
  heading: React.ReactNode;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export default function SectionHeader({ label, heading, description, dark = false, align = "left" }: SectionHeaderProps) {
  const textColor = dark ? "text-white" : "text-[#0a0a0a]";
  const descColor = dark ? "text-gray-400" : "text-gray-500";

  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
          dark
            ? "border border-white/15 bg-white/5 text-gray-400"
            : "bg-[#aaed2e]/15 border border-[#aaed2e]/40 text-[#0a0a0a]"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#aaed2e" }} />
        {label}
      </div>
      <h2
        className={`font-black uppercase leading-[0.92] ${textColor}`}
        style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)" }}
      >
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-sm font-medium leading-relaxed max-w-lg ${align === "center" ? "mx-auto" : ""} ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
