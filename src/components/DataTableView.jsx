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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Data Table</h1>
            <button
              onClick={onBackToDashboard}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {headers.map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pagination.paginatedData.map((row, idx) => {
                return (
                  <tr key={idx} className={row._flagged ? 'bg-red-50' : ''}>
                    {headers.map(h => (
                      <td key={h} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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