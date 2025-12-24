import FilterBar from './FilterBar';
import PaginationControls from './PaginationControls';

export default function DataTableView({ 
  headers, 
  processedData, 
  pagination,
  filterField,
  filterValue,
  onFilterFieldChange,
  onFilterValueChange,
  onClearFilters,
  onBackToDashboard
}) {
  return (
    <div className="min-h-screen bg-dark-primary">
      <div className="bg-dark-secondary shadow-lg border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-dark-primary">Data Table</h1>
            <button
              onClick={onBackToDashboard}
              className="btn-primary"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <FilterBar
          headers={headers}
          filterField={filterField}
          filterValue={filterValue}
          pageSize={pagination.pageSize}
          onFilterFieldChange={onFilterFieldChange}
          onFilterValueChange={onFilterValueChange}
          onPageSizeChange={(e) => pagination.setPageSize(Number(e.target.value))}
          onClear={onClearFilters}
        />

        {/* Table */}
        <div className="bg-dark-secondary rounded-lg shadow-lg overflow-x-auto border border-dark card-glow">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-dark-primary">
              <tr>
                {headers.map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium text-dark-secondary uppercase tracking-wider border-b-2 border-indigo-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-dark-secondary divide-y divide-gray-700">
              {pagination.paginatedData.map((row, idx) => {
                return (
                  <tr 
                    key={idx} 
                    className={`transition-colors ${
                      row._flagged 
                        ? 'bg-gradient-to-r from-red-900/30 to-red-800/20 border-l-4' 
                        : 'hover:bg-slate-700'
                    }`}
                  >
                    {headers.map(h => (
                      <td key={h} className="px-6 py-4 whitespace-nowrap text-sm text-dark-secondary">
                        {typeof row[h] === 'number' ? row[h].toLocaleString() : row[h]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <PaginationControls
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          startIdx={pagination.startIdx}
          endIdx={pagination.endIdx}
          totalRecords={processedData.filtered.length}
          onPageChange={pagination.setCurrentPage}
        />
      </div>
    </div>
  );
}