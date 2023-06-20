import React from "react";

const dataTable = [
  {
    id: 1,
    name: "Doe",
  },
  {
    id: 2,
    name: "oke",
  },
  {
    id: 3,
    name: "Doe",
  },
  {
    id: 4,
    name: "oke",
  },
  {
    id: 5,
    name: "Doe",
  },
  {
    id: 6,
    name: "oke",
  },
  {
    id: 7,
    name: "Doe",
  },
  {
    id: 8,
    name: "oke",
  },
];

const TOTAL_PAGES = 1;

const PaginationComponent = ({ currentPage, totalPages, onChangePage }) => {
  const renderRangeButton = () => {
    const buttons = [];
    const RANGE_TOTAL = 2;

    const range = Array.from(
      { length: RANGE_TOTAL },
      (_, index) => currentPage + index
    ).filter((item) => item > 0 && item < totalPages);

    range.forEach((item, index) => {
      const button = (
        <button key={index} onClick={() => onChangePage(item)}>
          {item}
        </button>
      );
      console.log("data" + item);
      buttons.push(button);
    });

    console.log(range);
    return buttons;
  };

  const handlePrev = () => {
    onChangePage(currentPage - 1);
  };

  const handleNext = () => {
    onChangePage(currentPage + 1);
  };

  return (
    <>
      <button onClick={handlePrev} disabled={currentPage == 0}>
        Prev Pages
      </button>
      {renderRangeButton()}
      <span>{totalPages}</span>
      <button onClick={handleNext} disabled={currentPage == totalPages}>
        Next Pages
      </button>
    </>
  );
};

function App() {
  const [currentPage, setPage] = React.useState(0);

  const handleChangePage = (page) => {
    setPage(page);
  };
  return (
    <div>
      <p>{currentPage}</p>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.slice(currentPage, currentPage + 3).map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={Math.ceil(dataTable.length / TOTAL_PAGES)}
        onChangePage={handleChangePage}
      />
    </div>
  );
}

export default App;
