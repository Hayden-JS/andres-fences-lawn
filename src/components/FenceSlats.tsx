export function FenceSlatPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={i * 21}
          y="0"
          width="14"
          height="200"
          fill={i % 2 === 0 ? 'currentColor' : 'transparent'}
          opacity={i % 2 === 0 ? 0.5 : 0}
        />
      ))}
    </svg>
  );
}

export function ProjectTile({
  icon: Icon,
  label,
  tone = 'forest',
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  tone?: 'forest' | 'cedar' | 'orange';
}) {
  const tones = {
    forest: 'from-af-forest to-af-forest-dark',
    cedar: 'from-af-cedar to-af-cedar-dark',
    orange: 'from-af-orange to-af-cedar-dark',
  };

  return (
    <div
      className={`relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-br ${tones[tone]} flex items-end p-6`}
    >
      <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10" />
      <Icon className="absolute top-6 right-6 w-8 h-8 text-white/40" />
      <span className="relative text-white font-af-display font-bold uppercase text-lg leading-tight drop-shadow">
        {label}
      </span>
    </div>
  );
}
