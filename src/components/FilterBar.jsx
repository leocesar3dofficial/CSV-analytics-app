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
    <div className="bg-white rounded-lg shadow p-4 mb-6 flex gap-4">
      <select
        value={filterField}
        onChange={onFilterFieldChange}
        className="border rounded px-3 py-2"
      >
        <option value="">Select field...</option>
        {headers.map(h => <option key={h} value={h}>{h}</option>)}
      </select>
      <input
        type="text"
        value={filterValue}
        onChange={onFilterValueChange}
        placeholder="Filter value..."
        className="border rounded px-3 py-2 flex-1"
      />
      <button
        onClick={onClear}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        Clear
      </button>
      <select
        value={pageSize}
        onChange={onPageSizeChange}
        className="border rounded px-3 py-2"
      >
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
        <option value="500">500 per page</option>
      </select>
    </div>
  );
}