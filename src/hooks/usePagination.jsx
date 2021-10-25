import { useEffect, useState } from "react";

const usePagination = (data, itemsPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  const lastPageData = itemsPage * currentPage;
  const firstPageData = lastPageData - itemsPage;

  const [filteredData, setFilteredData] = useState(data || []);
  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const [sliceData, setSliceData] = useState([...filteredData]?.slice(firstPageData, lastPageData));


  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSliceData([...filteredData]?.slice(firstPageData, lastPageData));
    if (searching) {
      setCurrentPage(1);
      setSearching(false);
    }
  }, [filteredData, firstPageData, lastPageData, searching]);

  const pages = Math.ceil(filteredData?.length / itemsPage);
  let otherLeft = false;
  let otherRight = false;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
    if (currentPage === pages) setCurrentPage(pages);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    if (currentPage === 1) setCurrentPage(1);
  };

  for (let i = 1; i < pages + 1; i++) {
    if (i === currentPage) {
      pageNumbers.push({ id: i, current: true, other: false });
    } else if (
      i < 2 ||
      i > pages - 1 ||
      i === currentPage - 1 ||
      i === currentPage + 1
    ) {
      pageNumbers.push({ id: i, current: false, other: false });
    } else if (i > 1 && i < currentPage && !otherLeft) {
      pageNumbers.push({ id: i, current: false, other: true });
      otherLeft = true;
    } else if (i < pages && i > currentPage && !otherRight) {
      pageNumbers.push({ id: i, current: false, other: true });
      otherRight = true;
    }
  }
  return {
    sliceData,
    paginate,
    nextPage,
    prevPage,
    pageNumbers,
    currentPage,
    pages,
    setFilteredData,
    setSearching,
  };
};
export default usePagination;
