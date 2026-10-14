/**
 * # getPageRange
 * A pure helper that decides which items a pagination bar should show:
 * the first page, the last page, the current page and its neighbours,
 * with `'ellipsis'` markers where pages are skipped.
 * Contains no React, so it can be reused or tested on its own.
 *
 * @param {number} currentPage
 * - **currentPage** - the page currently selected (1-based)
 * @param {number} totalPages
 * - **totalPages** - the total number of pages
 * @param {number} [siblingCount=1]
 * - **siblingCount** - how many neighbouring pages to show on each side of the current page
 *
 * @returns {Array<number|string>}
 * - an ordered array of page numbers, with the string `'ellipsis'` marking each skipped gap
 *
 * @example
 * getPageRange(5, 10);  // [1, 'ellipsis', 4, 5, 6, 'ellipsis', 10]
 * getPageRange(4, 10);  // [1, 2, 3, 4, 5, 'ellipsis', 10]
 */
const getPageRange = (currentPage, totalPages, siblingCount = 1) => {
  // A Set ignores duplicates, so page 1 can't be listed twice
  const pages = new Set([1, totalPages]);

  // Add the current page and its neighbours, staying inside 1..totalPages
  for (let p = currentPage - siblingCount; p <= currentPage + siblingCount; p++) {
    if (p >= 1 && p <= totalPages) {
      pages.add(p);
    }
  }

  // Set -> array, sorted numerically (plain .sort() would sort as strings)
  const sorted = [...pages].sort((a, b) => a - b);
  const result = [];

  sorted.forEach((page, index) => {
    if (index > 0) {
      const gap = page - sorted[index - 1];

      if (gap === 2) {
        result.push(page - 1);   // only one page hidden: show it instead of "…"
      } else if (gap > 2) {
        result.push('ellipsis'); // several pages hidden
      }
    }
    result.push(page);
  });

  return result;
};

export default getPageRange;