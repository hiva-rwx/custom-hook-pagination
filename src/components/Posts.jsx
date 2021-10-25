import { useState } from "react";
import { useSelector } from "react-redux";
import usePagination from "../hooks/usePagination";
import Pagination from "./pagination";

const Posts = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  const [search, setSearch] = useState("");
  const {
    pages,
    sliceData,
    nextPage,
    paginate,
    prevPage,
    pageNumbers,
    currentPage,
    setFilteredData,
    setSearching,
    filteredData
  } = usePagination(data, 10);

  const columns = [
    { label: "ID", sortByKey: "id" },
    { label: "UserId", sortByKey: "userId" },
    { label: "Title", sortByKey: "title" },
    { label: "Body", sortByKey: "body" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setSearching(true);
      const copyData = [...filteredData];
      const filterData = copyData?.filter((items) =>
        items.title.toLowerCase().includes(search.trim().toLowerCase())
      );
      setFilteredData(filterData);
    }
  };

  const sortASC = (sortByKey) => {
    const copyData = [...filteredData];
    const sortASC = copyData.sort((a, b) => a[sortByKey] - b[sortByKey]);
    setFilteredData(sortASC);
  };
  const sortDESC = (sortByKey) => {
    const copyData = [...filteredData];
    const sortDESC = copyData.sort((a, b) => a[sortByKey] - b[sortByKey]).reverse();
    setFilteredData(sortDESC);
  };
  return (
    <div className="w-75 mx-auto my-5">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-warning" type="submit">
          Search
        </button>
      </form>
      {loading && <h1 className="text-center text-danger">Loading...</h1>}
      {error && <h3 className="text-danger text-center my-4">{error}</h3>}
      <table className="table text-center">
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th key={index}>
                <span>{item.label}</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => sortASC(item.sortByKey)}
                >
                  &and;
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => sortDESC(item.sortByKey)}
                >
                  &or;
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            sliceData?.map((item, index) => (
              <tr key={index}>
                <td>{item?.id}</td>
                <td>{item?.userId}</td>
                <td>
                  <b>{item?.title}</b>
                </td>
                <td>{item?.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {!sliceData.length && (
        <h3 className="text-center text-secondary">Nothing</h3>
      )}
      {data && (
        <Pagination
          nextPage={nextPage}
          paginate={paginate}
          prevPage={prevPage}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          pages={pages}
        />
      )}
    </div>
  );
};

export default Posts;
