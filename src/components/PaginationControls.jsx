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
          className={`px-3 py-1 border rounded-lg transition-all ${
            currentPage === pageNum
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/30'
              : 'bg-slate-700 text-slate-200 border-slate-600 hover:bg-slate-600'
          }`}
        >
          {pageNum}
        </button>
      );
    });
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-slate-400">
        Showing <span className="font-medium text-slate-200">{startIdx + 1}</span> to{' '}
        <span className="font-medium text-slate-200">{Math.min(endIdx, totalRecords)}</span> of{' '}
        <span className="font-medium text-slate-200">{totalRecords}</span> records
      </p>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-slate-700 text-slate-200 border border-slate-600 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          First
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-slate-700 text-slate-200 border border-slate-600 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        
        <div className="flex gap-1">
          {renderPageNumbers()}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-slate-700 text-slate-200 border border-slate-600 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-slate-700 text-slate-200 border border-slate-600 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Last
        </button>
      </div>
    </div>
  );
}