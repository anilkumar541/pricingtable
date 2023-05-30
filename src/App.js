import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="data mt-3"
      style={{ display: "flex", justifyContent: "center", height: "100vh" }}
    >
      <div>
        <h1>Pricing</h1>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <td scope="col"></td>
              <td
                scope="col"
                onClick={() => handleClick(0)}
                className={
                  activeIndex === 0 ? "active header-cell" : "header-cell"
                }
              >
                7 Days
              </td>
              <td
                scope="col"
                onClick={() => handleClick(1)}
                className={
                  activeIndex === 1 ? "active header-cell" : "header-cell"
                }
              >
                15 Days
              </td>
              <td
                scope="col"
                onClick={() => handleClick(2)}
                className={
                  activeIndex === 2 ? "active header-cell" : "header-cell"
                }
              >
                30 Days
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Per Day Price</th>
              <td
                className={
                  activeIndex === 0 ? "active table-cell" : "table-cell"
                }
              >
                7000
              </td>
              <td
                className={
                  activeIndex === 1 ? "active table-cell" : "table-cell"
                }
              >
                15000
              </td>
              <td
                className={
                  activeIndex === 2 ? "active table-cell" : "table-cell"
                }
              >
                30000
              </td>
            </tr>
            <tr>
              <th scope="row">Total Savings</th>
              <td
                className={
                  activeIndex === 0 ? "active table-cell" : "table-cell"
                }
              >
                700
              </td>
              <td
                className={
                  activeIndex === 1 ? "active table-cell" : "table-cell"
                }
              >
                2250
              </td>
              <td
                className={
                  activeIndex === 2 ? "active table-cell" : "table-cell"
                }
              >
                6000
              </td>
            </tr>
            <tr>
              <th scope="row">Total Amount</th>
              <td
                className={
                  activeIndex === 0 ? "active table-cell" : "table-cell"
                }
              >
                6300
              </td>
              <td
                className={
                  activeIndex === 1 ? "active table-cell" : "table-cell"
                }
              >
                12750
              </td>
              <td
                className={
                  activeIndex === 2 ? "active table-cell" : "table-cell"
                }
              >
                24000
              </td>
            </tr>
          </tbody>
        </table>
        <div
          className="actionButton"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            type="button"
            className={activeIndex === 0 ? "btn " : "btn"}
            onClick={() => handleClick(0)}
          >
            7 Days
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className={activeIndex === 1 ? "btn " : "btn"}
            onClick={() => handleClick(1)}
          >
            15 Days
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className={activeIndex === 2 ? "btn " : "btn "}
            onClick={() => handleClick(2)}
          >
            30 Days
          </button>
          &nbsp;&nbsp;
        </div>
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Pay with UPI
          </button>
          or
          <button className="btn btn-outline-primary" type="button">
            Pay with Other option
          </button>
          <span>* Terms and Condition applied</span>
        </div>
      </div>
    </div>
  );
}

export default App;
