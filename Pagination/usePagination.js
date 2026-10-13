import { useState } from 'react';

/**
 * # usePagination
 * A hook that manages pagination state for a list of items: the current
 * page, the total number of pages, and safe navigation between them.
 * Pages are 1-based, never go out of range, and stay valid even if the
 * list shrinks (for example after a search filter) while the user is on a later page.
 *
 * @param {number} totalItems
 * - **totalItems** - the total number of items across all pages
 * @param {number} [pageSize=10]
 * - **pageSize** - how many items are shown per page
 * @param {number} [initialPage=1]
 * - **initialPage** - the page to start on (1-based)
 *
 * @returns {object}
 * - **currentPage** - the current page number, always within `1` to `totalPages`
 * - **totalPages** - total number of pages (never lower than `1`, even for an empty list)
 * - **goToPage** - `(page) => void` — jumps to a specific page, clamped to the valid range
 * - **nextPage** - `() => void` — moves forward one page, stopping at the last page
 * - **prevPage** - `() => void` — moves back one page, stopping at the first page
 * - **isFirstPage** - `true` when on the first page (use to disable a Prev button)
 * - **isLastPage** - `true` when on the last page (use to disable a Next button)
 *
 * @example
 * const { currentPage, totalPages, nextPage, prevPage, isFirstPage, isLastPage } =
 *   usePagination(products.length, 10);
 * <button onClick={prevPage} disabled={isFirstPage}>Prev</button>
 * <span>{currentPage} / {totalPages}</span>
 * <button onClick={nextPage} disabled={isLastPage}>Next</button>
 */
const usePagination = (totalItems, pageSize = 10, initialPage = 1) => {
  const [page, setPage] = useState(initialPage);

  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(totalPages, page);

  const goToPage = (target) => {
    setPage(Math.max(1, Math.min(totalPages, target)));
  };

  const nextPage = () => {
    setPage(prev => Math.min(totalPages, prev + 1));
  };

  const prevPage = () => {
    setPage(prev => Math.max(1, Math.min(totalPages, prev) - 1));
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return { currentPage, totalPages, goToPage, nextPage, prevPage, isFirstPage, isLastPage };
};

export default usePagination;