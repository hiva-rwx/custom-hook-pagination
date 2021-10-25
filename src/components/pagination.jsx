const Pagination = ({
  nextPage,
  paginate,
  prevPage,
  pageNumbers,
  currentPage,
  pages,
}) => {
  return (
    <div className="d-flex justify-content-center">
      {pages ? (
        <div
          className={
            currentPage === 1 ? "btn btn-primary disabled" : "btn btn-primary"
          }
          onClick={prevPage}
        >
          &#60;
        </div>
      ) : null}
      {pageNumbers.map((page) => {
        if (!page.other) {
          return (
            <span
              key={page.id}
              className={`btn  mx-1 ${
                page.current ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => paginate(page.id)}
            >
              {page.id}
            </span>
          );
        } else {
          return (
            <span key={page.id} className="btn disabled">
              <b>&hellip;</b>
            </span>
          );
        }
      })}
      {pages ? (
        <div
          className={
            pages === currentPage
              ? "btn btn-primary disabled"
              : `btn btn-primary`
          }
          onClick={nextPage}
        >
          &#62;
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
