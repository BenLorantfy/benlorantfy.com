export function GlobeIcon({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size === "sm" ? 16 : 24}
        height={size === "sm" ? 16 : 24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        style={{ flexShrink: 0 }}
    >
        <circle cx={12} cy={12} r={10} />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
    </svg>
  );
}