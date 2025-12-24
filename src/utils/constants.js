export const DEFAULT_RULES = {
  rules: [
    { type: "sum", field: "revenue", label: "Total Revenue" },
    { type: "average", field: "margin", label: "Avg Margin" },
    { type: "count", field: "*", label: "Total Records" },
    { type: "flag", condition: "revenue < 0", label: "Negative Revenue", flagField: "warning" }
  ]
};

export const COLORS = [
  '#8b5cf6', // Vibrant Purple
  '#3b82f6', // Bright Blue
  '#06b6d4', // Cyan
  '#10b981', // Emerald Green
  '#f59e0b', // Amber
  '#ec4899', // Pink
  '#a78bfa', // Light Purple
  '#60a5fa', // Sky Blue
  '#22d3ee', // Light Cyan
  '#34d399', // Light Green
  '#fbbf24', // Yellow
  '#f472b6', // Light Pink
];
