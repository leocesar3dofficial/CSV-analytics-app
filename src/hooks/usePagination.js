import { useState, useMemo } from 'react';

export default function usePagination(data, initialPageSize = 25) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(data.length / pageSize);
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const paginatedData = data.slice(startIdx, endIdx);

    return {
      currentPage,
      pageSize,
      totalPages,
      startIdx,
      endIdx,
      paginatedData,
    };
  }, [data, currentPage, pageSize]);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, paginationData.totalPages)));
  };

  const changePageSize = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    ...paginationData,
    setCurrentPage: goToPage,
    setPageSize: changePageSize,
    resetPagination,
  };
}