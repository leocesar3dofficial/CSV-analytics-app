export default function FilterBar({ 
  headers, 
  filterField, 
  filterValue, 
  pageSize,
  onFilterFieldChange, 
  onFilterValueChange, 
  onPageSizeChange,
  onClear 
}) {
  return (
    <div className="bg-dark-secondary rounded-lg shadow-lg p-4 mb-6 flex gap-4 border border-dark">
      <select
        value={filterField}
        onChange={onFilterFieldChange}
        className="bg-slate-700 text-slate-200 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="">Select field...</option>
        {headers.map(h => <option key={h} value={h}>{h}</option>)}
      </select>
      <input
        type="text"
        value={filterValue}
        onChange={onFilterValueChange}
        placeholder="Filter value..."
        className="bg-slate-700 text-slate-200 border border-slate-600 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-400"
      />
      <button
        onClick={onClear}
        className="px-4 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-all border border-slate-600"
      >
        Clear
      </button>
      <select
        value={pageSize}
        onChange={onPageSizeChange}
        className="bg-slate-700 text-slate-200 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
        <option value="500">500 per page</option>
      </select>
    </div>
  );
}