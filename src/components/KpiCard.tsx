import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export function KpiCard({ title, value, subtitle, icon: Icon, highlight }: KpiCardProps) {
  return (
    <div
      className={`kpi-card ${highlight ? "kpi-card--highlight" : ""}`}
    >
      <div className="kpi-card__icon-wrapper">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <p className="kpi-card__title">{title}</p>
      <p className="kpi-card__value">{value}</p>
      {subtitle && <p className="kpi-card__subtitle">{subtitle}</p>}
    </div>
  );
}
