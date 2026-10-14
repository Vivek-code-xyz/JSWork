import { ChevronLeft, ChevronRight } from 'lucide-react';
import getPageRange from './getPageRange';

/**
 * # Pagination
 * A presentational component that renders a pagination bar: Prev and Next
 * buttons plus numbered page buttons that collapse into `…` for long lists.
 * Pairs with the `usePagination` hook, which owns the page state and logic.
 *
 * @param {object} props
 * - **currentPage** - the page currently selected (1-based)
 * - **totalPages** - the total number of pages
 * - **onPageChange** - `(page) => void` called with the page the user wants to go to
 * - **siblingCount** - (optional, default `1`) how many neighbouring pages to show around the current page
 *
 * @returns {JSX.Element|null}
 * - a `<nav>` with Prev, page buttons, and Next, or `null` when there is only one page
 *
 * @example
 * const { currentPage, totalPages, goToPage } = usePagination(products.length, 10);
 * return <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />;
 */
const Pagination = ({ currentPage, totalPages, onPageChange, siblingCount = 1 }) => {
  // A bar with a single page is just clutter
  if (totalPages <= 1) return null;

  const items = getPageRange(currentPage, totalPages, siblingCount);

  return (
    <nav aria-label="Pagination" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {items.map((item, index) =>
        item === 'ellipsis' ? (
          // index in the key, because the list can contain two ellipses
          <span key={`ellipsis-${index}`}>…</span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            aria-current={item === currentPage ? 'page' : undefined}
            style={{ fontWeight: item === currentPage ? 'bold' : 'normal' }}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};

export default Pagination;