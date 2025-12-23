# CSV Analytics App

A React-based web application for importing, processing, and visualizing CSV data with custom business rules.

## Project Structure
```
src/
├── components/          # UI Components
│   ├── UploadView.jsx          # CSV file upload screen
│   ├── DashboardView.jsx       # Executive dashboard with KPIs and charts
│   ├── DataTableView.jsx       # Data table with filters and pagination
│   ├── RulesView.jsx           # Business rules configuration
│   ├── KPICard.jsx             # Reusable KPI card component
│   ├── ChartSection.jsx        # Reusable chart component (bar/line)
│   ├── FilterBar.jsx           # Filter controls for data table
│   └── PaginationControls.jsx  # Pagination UI component
│
├── hooks/               # Custom React Hooks
│   ├── useCSVProcessor.js      # Process CSV data with business rules
│   └── usePagination.js        # Handle pagination logic
│
├── utils/               # Utility Functions
│   ├── constants.js            # App constants (DEFAULT_RULES, COLORS)
│   ├── businessRules.js        # Business rule evaluation functions
│   └── csvHelpers.js           # CSV parsing and chart data generation
│
├── App.jsx              # Main app orchestrator (~100 lines)
├── main.jsx             # React entry point
└── index.css            # Global styles with Tailwind
```

## Features

- **CSV Import**: Drag-and-drop or browse to upload CSV files
- **Business Rules**: JSON-based rule engine for calculations and flags
  - Sum: Total values in a field
  - Average: Calculate mean values
  - Count: Count records
  - Flag: Highlight rows matching conditions
- **Executive Dashboard**: KPI cards, bar charts, and line charts
- **Data Table**: Filterable table with pagination (25/50/100/500 per page)
- **Rule Configuration**: Edit business rules via JSON

## Running the App
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Adding New Features

### Add a new business rule type:
1. Add evaluation function to `src/utils/businessRules.js`
2. Update `processBusinessRules()` to handle new type
3. Document in `RulesView.jsx`

### Add a new chart type:
1. Update `ChartSection.jsx` with new chart type
2. Pass appropriate `type` prop from `DashboardView.jsx`

### Add a new view:
1. Create component in `src/components/`
2. Add view state to `App.jsx`
3. Add navigation buttons in relevant views
4. Add conditional render in `App.jsx`

## Technologies

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Recharts (charts)
- Papaparse (CSV parsing)
- Lucide React (icons)

## Performance

- Handles up to 50,000 rows efficiently
- Memoized calculations for optimal re-renders
- Pagination reduces DOM load
- Custom hooks prevent unnecessary recalculations