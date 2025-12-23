export default function PaginationControls({ 
  currentPage, 
  totalPages, 
  startIdx, 
  endIdx, 
  totalRecords,
  onPageChange 
}) {
  const renderPageNumbers = () => {
    return Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
      let pageNum;
      if (totalPages <= 5) {
        pageNum = i + 1;
      } else if (currentPage <= 3) {
        pageNum = i + 1;
      } else if (currentPage >= totalPages - 2) {
        pageNum = totalPages - 4 + i;
      } else {
        pageNum = currentPage - 2 + i;
      }
      
      return (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`px-3 py-1 border rounded transition ${
            currentPage === pageNum
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-50'
          }`}
        >
          {pageNum}
        </button>
      );
    });
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">{startIdx + 1}</span> to{' '}
        <span className="font-medium">{Math.min(endIdx, totalRecords)}</span> of{' '}
        <span className="font-medium">{totalRecords}</span> records
      </p>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          First
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Previous
        </button>
        
        <div className="flex gap-1">
          {renderPageNumbers()}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Last
        </button>
      </div>
    </div>
  );
}