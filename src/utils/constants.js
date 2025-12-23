export const DEFAULT_RULES = {
  rules: [
    { type: "sum", field: "revenue", label: "Total Revenue" },
    { type: "average", field: "margin", label: "Avg Margin" },
    { type: "count", field: "*", label: "Total Records" },
    { type: "flag", condition: "revenue < 0", label: "Negative Revenue", flagField: "warning" }
  ]
};

export const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
