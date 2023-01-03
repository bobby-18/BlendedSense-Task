import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { businesses } from "../redux/actions/BsActions";
import { makeStyles } from "@material-ui/styles";
import { EllipsisOutlined } from "@ant-design/icons";
import SearchBar from "material-ui-search-bar";
import { useNavigate } from "react-router-dom";
function Businesses() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [searched, setSearched] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const columns = [
    {
      id: "img",
      minWidth: 10,
      align: "center",
    },
    {
      id: "name",
      label: "Business",
      minWidth: 60,
      align: "center",
    },

    {
      id: "type",
      label: "Type",
      minWidth: 30,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "BusinessVertical",
      label: "Business Vertical",
      minWidth: 200,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "action",
      label: "action",
      minWidth: 20,
      align: "center",
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(businesses({ token }));
  }, [dispatch]);

  const businessessData = useSelector((state) => state.projects);
  let imageData = businessessData.map((img) => {
    return img.bannerImage;
  });
  function images() {
    if (imageData.bannerImage) {
      return (
        <img
          src={imageData.bannerImage}
          style={{ width: 20, height: 20 }}
          alt="img0"
        />
      );
    } else {
      return (
        <img
          src="https://stage.blendedsense.com/img/businesses.eba97e8e.svg"
          alt="img1"
          style={{ width: 20, height: 20 }}
        />
      );
    }
  }

  function deleteIcon() {
    return (
      <button
        className="ellipsisbtn"
        style={{ color: "black", fontWeight: 800, fontSize: "medium" }}
      >
        <EllipsisOutlined />
      </button>
    );
  }

  const rows = businessessData.map((ele) => {
    if (ele.type === "1") {
      return {
        img: images(),
        name: ele.name,
        type: "Business",
        BusinessVertical:
          ele.businessTypeId === 1
            ? "E-Commerce"
            : ele.businessTypeId === 2
            ? "Professional Services"
            : ele.businessTypeId === 3
            ? " Technology"
            : "other",
        action: deleteIcon(),
        sweepId: ele.project.businessId,
      };
    } else {
      return {
        img: images(),
        type: "Organization",
        name: ele.name,
        action: deleteIcon(),
        BusinessVertical:
          ele.businessTypeId === 1
            ? "E-Commerce"
            : ele.businessTypeId === 2
            ? "Professional Services"
            : ele.businessTypeId === 3
            ? " Technology"
            : "other",
        sweepId: ele.project.businessId,
      };
    }
  });
  const [rowss, setRowss] = useState(rows);
  // ------------------------------sweepas api calling ---------------------------------------------
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handle = (sweepid) => {
    navigate(`/Dashboard/project_overview/${sweepid}`);

    const headers = {
      Authorization: `Bearer ${token}`,
      "client-id": "4CD884F88F476F647CC4446D4593D",
      "client-secret": "A955BEBD27BFC49E8CE12129346A4",
    };
    axios
      .get(
        `https://stage.blendedsense.com/api/sweep/list/${sweepid}?timeZone=Asia/Calcutta`,
        { headers }
      )
      .then((response) => {
        console.log(
          response.data.sweeps.history.map((dat) => {
            return {
              date: dat.date,
              title: dat.title,
            };
          })
        );
      });
  };

  // -------------------------sweeps ending---------------------------------------------

  // ------------------------------------------searchfilter-----------------------------------------------------------

  const requestSearch = (searchedVal) => {
    console.log(searchedVal);
    const filteredRows = rows.filter((row) =>
      row?.name?.toLowerCase()?.includes(searchedVal?.toLowerCase())
    );
    setRowss(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  // ------------------------------------------searchfilter end-------------------------------------------------------

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const useStyles = makeStyles({
    tableRow: {
      height: 40,
    },
    tableCell: {
      padding: "0px 20px",
      width: "150px",
    },
    table: {
      "& .MuiTableCell-root": {
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
      },
    },

    toolbar: {
      "& > p:nth-of-type(2)": {
        fontSize: "10px",
        color: "black",
      },
    },
  });
  const classes = useStyles();
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
  };
  const [selectedId, setSelectedId] = useState();
  const handleSelectChange = (e) => {
    setSelectedId(e.target.value);
  };
  return (
    <div>
      <h3 className="businessHeadTag">Businesses</h3>
      <div className="sweeptable">
        <div className="actionSearch">
          <select
            onChange={handleSelectChange}
            style={{ width: 80, fontSize: 10, border: "none" }}
          >
            <option value="">All types</option>

            <option value="Business" name="Business">
              Business
            </option>
            <option value="Organization" name="Business">
              Organization
            </option>
          </select>
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            className="searchfilte "
            style={{ height: 28 }}
          />
        </div>

        <Box sx={{ ...commonStyles, border: 1, borderColor: "#d8d1d1" }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 300 }}>
              <Table
                stickyHeader
                aria-label="sticky table"
                className={classes.table}
              >
                <TableHead className={classes.tableRow}>
                  <TableRow className={classes.tableRow}>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        className={classes.TableCell}
                        style={{
                          minWidth: column.minWidth,
                          border: "1px, solid",
                          fontSize: 10,
                          fontFamily: "poppins",
                          color: "#d8d1d1",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowss
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((value) => {
                      if (selectedId) {
                        return value.type === selectedId;
                      } else {
                        return true;
                      }
                    })
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                          className={classes.tableRow}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                onClick={() => handle(row.sweepId)}
                                key={column.id}
                                align={column.align}
                                className={classes.tableCell}
                                style={{
                                  fontSize: 10,
                                  fontFamily: "poppins",
                                  maxWidth: 150,
                                  overflow: "hidden",
                                }}
                              >
                                {value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[50, 100]}
              component="div"
              count={rowss.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              labelRowsPerPage={""}
              onRowsPerPageChange={handleChangeRowsPerPage}
              classes={{
                toolbar: classes.toolbar,
              }}
            />
          </Paper>
        </Box>
      </div>
    </div>
  );
}
export default Businesses;
