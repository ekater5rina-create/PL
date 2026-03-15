interface TopItem {
  name: string;
  value: number;
  label: string;
}

interface TopThreeCardProps {
  title: string;
  items: TopItem[];
}

const MEDALS = ["🥇", "🥈", "🥉"];

export function TopThreeCard({ title, items }: TopThreeCardProps) {
  const max = items[0]?.value ?? 1;

  return (
    <div className="kpi-card" style={{ minHeight: 220 }}>
      <p className="kpi-card__title mb-4">{title}</p>
      <div className="flex flex-col gap-3">
        {items.length === 0 && (
          <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            Нет данных
          </p>
        )}
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium leading-tight flex-1 truncate" style={{ color: "hsl(var(--foreground))" }} title={item.name}>
                {MEDALS[i]} {item.name.length > 42 ? item.name.slice(0, 42) + "…" : item.name}
              </span>
              <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "hsl(var(--gold))" }}>
                {item.label}
              </span>
            </div>
            <div className="top-bar-bg">
              <div
                className="top-bar-fill"
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
