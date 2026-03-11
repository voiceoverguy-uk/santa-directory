import { Shield, Sparkles, Home, Building2, GraduationCap, TreePine, Video } from "lucide-react";

const badgeConfig: Record<string, { label: string; icon: React.ReactNode }> = {
  dbsChecked: { label: "DBS Checked", icon: <Shield size={14} /> },
  realBeard: { label: "Real Beard", icon: <Sparkles size={14} /> },
  homeVisits: { label: "Home Visits", icon: <Home size={14} /> },
  corporateEvents: { label: "Corporate", icon: <Building2 size={14} /> },
  schoolsNurseries: { label: "Schools", icon: <GraduationCap size={14} /> },
  grottos: { label: "Grottos", icon: <TreePine size={14} /> },
  videoAvailable: { label: "Video", icon: <Video size={14} /> },
};

interface BadgePillProps {
  badge: string;
  size?: "sm" | "md";
}

export default function BadgePill({ badge, size = "sm" }: BadgePillProps) {
  const config = badgeConfig[badge];
  if (!config) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-cream text-charcoal rounded-full font-medium ${
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm"
      }`}
    >
      <span className="text-brand">{config.icon}</span>
      {config.label}
    </span>
  );
}
