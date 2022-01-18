import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import Axios from "axios";
import Table from "./Table";

const Orders = () => {
  const [listOfOrders, setListOfOrders] = useState([]);

  //table data for react-table
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BASEURL}/getOrders`).then((res) => {
      setListOfOrders(res.data);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        id: "expander", // Make sure it has an ID
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? "▼" : "►"}
            </span>
          ) : null,
      },
      {
        Header: "Order",
        columns: [
          {
            Header: "Total",
            accessor: "total",
            // Cell method will provide the value of the cell; we can create a custom element for the Cell
            Cell: ({ cell: { value } }) => {
              return typeof value == "undefined" ? `` : `$${value}.00`;
            },
          },
          {
            Header: "Purchase Date",
            accessor: "timestamp",
            Cell: ({ cell: { value } }) => {
              return typeof value == "undefined"
                ? ``
                : `${value.split("T")[0]}`;
            },
          },
        ],
      },
      {
        Header: "Pizza",
        columns: [
          {
            Header: "Name",
            accessor: "pizzatype",
          },
          {
            Header: "Code",
            accessor: "pizzaid",
          },
          {
            Header: "Category",
            accessor: "category",
          },
          {
            Header: "Size",
            accessor: "pizzasize",
          },
          {
            Header: "Qty",
            accessor: "qty",
          },
          {
            Header: "Price",
            accessor: "sprice",
            Cell: ({ cell: { value } }) => {
              return typeof value == "undefined" ? `` : `$${value}.00`;
            },
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="page-size">
      <Table className="page-size" columns={columns} data={listOfOrders} />
    </div>
  );
};

export default Orders;
