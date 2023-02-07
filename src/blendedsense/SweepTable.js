import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { EllipsisOutlined } from "@ant-design/icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { sweep } from "./redux/actions/BsActions";
import { dashboard } from "./redux/actions/BsActions";
import { useSelector } from "react-redux";
import SearchBar from "material-ui-search-bar";
import CustomizedDialogs from "./AddSweepBlock";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { equipment } from "./redux/actions/BsActions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClosee, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0.5 }} {...other}>
      {children}
      {onClosee ? (
        <IconButton
          aria-label="close"
          onClick={onClosee}
          sx={{
            position: "absolute",
            left: 200,
            top: 3,
            width: 5,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClosee: PropTypes.func.isRequired,
};
// --------------------------edit modal upto here ---------------------------------------------
// --------------------------delete modal from here--------------------------------------------

const BootstrapDialogg = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitlee(props) {
  const { children, onCloseee, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
      {children}
      {onCloseee ? (
        <IconButton
          aria-label="close"
          onClick={onCloseee}
          sx={{
            position: "absolute",
            left: 120,
            top: 2,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitlee.propTypes = {
  children: PropTypes.node,
  onCloseee: PropTypes.func.isRequired,
};
// -----------------------delete modal upto here-----------------------------

export default function SweepTable() {
  const [page, setPage] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searched, setSearched] = useState("");
  const [modalData, setModalData] = useState("");
  const [equData, setEquData] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(dashboard({ token }));
    dispatch(sweep({ token }));
    dispatch(equipment({ token }));
  }, [dispatch]);

  const sweepData = useSelector((state) => state.sweep);
  const equipmentData = useSelector((state) => state.equipment);
  const [reduxData, setReduxData] = useState([]);
  useEffect(() => {
    setReduxData(sweepData);
  }, [sweepData]);
  // ------------------------------------------searchfilter-----------------------------------------------------------

  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setUpdatedRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  // ------------------------------------------searchfilter end-------------------------------------------------------
  const columns = [
    {
      id: "name",
      label: "Sweep Block",
      minWidth: 170,
    },

    {
      id: "durationInMinutes",
      label: "Duration(Minutes)",
      minWidth: 170,

      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "action",
      minWidth: 170,
      align: "right",
    },
  ];

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const rows = sweepData.map((ele) => {
    let eq = ele.sweepBlockEquipment.shift();
    return {
      name: ele.name,
      id: ele.id,
      durationInMinutes: ele.durationInMinutes,
      sweepBlockTypeId: ele.sweepBlockTypeId,
      sweepBlockType: ele.sweepBlockType.name,
      action: deleteIcon(ele),
      equipmentId: eq?.sweepBlockEquipmentItemId,
      sweep: ele.sweepBlockEquipment,
    };
  });

  function deleteIcon(ele) {
    return (
      <button
        onClick={(event) => {
          handleClick(event);
          setModalData(ele);
          setEquData(ele);
        }}
        className="ellipsisbtn"
        style={{
          color: "black",
          fontWeight: 800,
          fontSize: "medium",
          border: "none",
          backgroundColor: "white",
        }}
      >
        <EllipsisOutlined />
      </button>
    );
  }

  const equipmentModalData = equipmentData.map((ele) => {
    return {
      equipmentId: ele.id,
      equipmentName: ele.name,
      action: deleteIcon(ele),
    };
  });
  console.log(equipmentModalData);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [updatedRows, setUpdatedRows] = useState(rows);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const useStyles = makeStyles({
    tableRow: {
      height: 40,
    },
    tableCell: {
      padding: "0px 70px",
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
  // ------------------------------edit sweep Modal------------------------------------------------

  function calling() {
    const headers = {
      Authorization: `Bearer ${token}`,
      "client-id": "4CD884F88F476F647CC4446D4593D",
      "client-secret": "A955BEBD27BFC49E8CE12129346A4",
    };
    axios
      .get("https://stage.blendedsense.com/api/sweepblocks/list", { headers })
      .then((response) => {
        setUpdatedRows(
          response.data.data.map((ele) => {
            let eq = ele.sweepBlockEquipment.shift();
            return {
              name: ele.name,
              id: ele.id,
              durationInMinutes: ele.durationInMinutes,
              sweepBlockTypeId: ele.sweepBlockTypeId,
              equipmentId: eq?.sweepBlockEquipmentItemId,
              action: deleteIcon(ele),
            };
          })
        );
      });
  }
  function showToastMessage() {
    toast.success("sweep block has been updated", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  }
  function showToastDeleteMessage() {
    toast.success("sweep block has been deleted", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  }

  const [openn, setOpenn] = React.useState(false);

  const handleClickOpenn = () => {
    setOpenn(true);
  };
  const handleClosee = (e) => {
    setOpenn(false);
  };
  const token = localStorage.getItem("token");
  const handle = (e) => {
    e.currentTarget.disabled = true;
    const headers = {
      Authorization: `Bearer ${token}`,
      "client-id": "4CD884F88F476F647CC4446D4593D",
      "client-secret": "A955BEBD27BFC49E8CE12129346A4",
    };
    axios
      .post(
        `https://stage.blendedsense.com/api/sweepblocks/update/${modalData.id}`,
        {
          name: modalData.name,
          durationInMinutes: modalData.durationInMinutes,
          title: modalData.name,
          duration: modalData.durationInMinutes,
          type: modalData.sweepBlockType.name,
          equipments: modalData.sweepBlockEquipment,
          settings: modalData.sweepBlockShotSettings,
          ...modalData,
        },
        { headers }
      )
      .then((response) => {
        showToastMessage();
        calling();
      });
    setTimeout(() => {
      setOpenn(false);
    }, 4000);
    e.currentTarget.disabled = true;
  };
  // ---------------------------------delete sweep Modal------------------------------------------------
  const [opennn, setOpennn] = React.useState(false);

  const handleClickOpennn = () => {
    setOpennn(true);
  };
  const handleCloseee = () => {
    setOpennn(false);
  };

  const handleDelete = (e) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "client-id": "4CD884F88F476F647CC4446D4593D",
      "client-secret": "A955BEBD27BFC49E8CE12129346A4",
    };
    axios
      .delete(
        `https://stage.blendedsense.com/api/sweepblocks/delete/${modalData.id}`,
        { headers }
      )
      .then((response) => {
        showToastDeleteMessage();
        calling();
      });
    setTimeout(() => {
      setOpennn(false);
    }, 2000);

    e.currentTarget.disabled = true;
  };

  const updateFormData = (event) =>
    setModalData({
      ...modalData,
      [event.target.name]: event.target.value,
    });
  const updateForm = (event) =>
    setModalData({
      [event.target.name]: event.target.value,
    });
  const updateEquipment = (event) =>
    setEquData({
      [event.target.name]: event.target.value,
    });

  return (
    <div className="sweeptable">
      <div className="sweeptableFlex">
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          className="searchfilter"
          style={{ height: 28 }}
        />
        <CustomizedDialogs />
      </div>
      <Box sx={{ ...commonStyles, border: 1, borderColor: "#d8d1d1" }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 250 }}>
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
                {updatedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                              key={sweepData.id}
                              align={column.align}
                              className={classes.tableCell}
                              style={{
                                fontSize: 10,
                                fontFamily: "poppins",
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
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={updatedRows.length}
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

      {/* --------------------------Menu---------------------------------- */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          style={{ fontSize: 8, fontFamily: "Poppins" }}
          onClick={handleClose}
        >
          <button
            onClick={handleClickOpenn}
            style={{ border: "none", backgroundColor: "white" }}
          >
            Edit Sweep Block
          </button>
        </MenuItem>
        <br></br>
        <MenuItem style={{ fontSize: 8, color: "red" }} onClick={handleClose}>
          <button
            onClick={handleClickOpennn}
            style={{ border: "none", backgroundColor: "white" }}
          >
            Delete Sweep Block
          </button>
        </MenuItem>
      </Menu>
      {/* -------------------------For editSweep Modal--------------------------------------------- */}

      <BootstrapDialog
        onClosee={handleClosee}
        aria-labelledby="customized-dialog-title"
        open={openn}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "380px",
              minHeight: "200px",
            },
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClosee={handleClosee}
        >
          <span className="editmodalheading">Sweep Block Details</span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div>
            <div>
              <form>
                <span className="spanedit">Type</span>
                <br />
                <select
                  className="spanedit"
                  value={modalData.sweepBlockTypeId}
                  onChange={(e) => updateForm(e)}
                >
                  <option value="1" name="content capture" className="spanedit">
                    Content Capture
                  </option>
                  <option value="2" name="Meeting" className="spanedit">
                    Meeting
                  </option>
                  <option value="3" name="Commute" className="spanedit">
                    Commute
                  </option>
                </select>
                <br />
                <span className="spanedit">Title</span>
                <br />
                <input
                  name="name"
                  value={modalData.name}
                  className="editinput"
                  onChange={(e) => updateFormData(e)}
                ></input>
                <br />
                <span className="spanedit">Duration</span>
                <br />
                <input
                  name="durationInMinutes"
                  value={modalData.durationInMinutes}
                  onChange={(e) => updateFormData(e)}
                ></input>{" "}
                <span className="spanedit">minutes</span>
              </form>
            </div>
            <div
              className={modalData.sweepBlockTypeId === 1 ? "show" : "hidden"}
            >
              <hr></hr>
              <span className="editmodalheading">Capture Settings</span>
              <br />
              <span className="spanedit">shot setting</span>
              <br />
              <select className="spanedit">
                <option> quick shot</option>
              </select>
              <br />
              <span className="spanedit">Equipment</span>
              <span className="Quantity">Quantity</span>
              <br />
              <select
                value={modalData.equipmentId}
                onChange={(e) => updateEquipment(e)}
                className="camera"
              >
                {equipmentData.map(({ id, name }, index) => (
                  <option value={id}>{name}</option>
                ))}
              </select>
              <select className="quantityselect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div>
            <button
              autoFocus
              onClick={handle}
              disabled={false}
              className="savebtn"
            >
              save
            </button>
            <ToastContainer autoOpen={10} autoClose={2500} />
          </div>
          <button autoFocus onClick={handleClosee} className="cancelbtn">
            Cancel
          </button>
        </DialogActions>
      </BootstrapDialog>
      {/* -------------------for delete Sweep modal --------------------------------------*/}
      <BootstrapDialogg
        onCloseee={handleCloseee}
        aria-labelledby="customized-dialog-title"
        open={opennn}
      >
        <BootstrapDialogTitlee
          id="customized-dialog-title"
          onCloseee={handleCloseee}
        >
          <span className="editmodalheading">Delete Sweep Block </span>
        </BootstrapDialogTitlee>
        <DialogContent dividers>
          <p className="spanedit">
            Are you sure you want to permanently delete this sweep <br /> block?
            Sweeps will remain unchanged.
          </p>
          <p className="spanedit">
            Once completed, the action can not be undone.
          </p>
        </DialogContent>
        <DialogActions>
          <div>
            <button autoFocus className="deletebtn" onClick={handleDelete}>
              Delete
            </button>
            <ToastContainer autoOpen={10} autoClose={500} />
          </div>
          <button autoFocus onClick={handleCloseee} className="cancelbtn">
            Cancel
          </button>
        </DialogActions>
      </BootstrapDialogg>
    </div>
  );
}
