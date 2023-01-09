import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { EllipsisOutlined } from "@ant-design/icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Todo from "./SweepTodo";
import PropTypes from "prop-types";
import Todoo from "./ShotSetting";
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
            right: 7,
            top: 4,
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
// --------------------Equipment todo------------------------------------------------------
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
            right: 6,
            top: 8,
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
// ---------------------------------shot todo-------------------------------------------------------
export default function SweepDetails() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },

    {
      id: "action",

      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openPop = Boolean(anchorEll);
  const handleClickk = (event) => {
    setAnchorEll(event.currentTarget);
  };

  const handleCloseeee = () => {
    setAnchorEll(null);
  };
  var deleteIcon = (
    <Button
      onClick={handleClick}
      className="ellipsisbtn"
      style={{ color: "black", fontWeight: 800, fontSize: "medium" }}
    >
      <EllipsisOutlined />
    </Button>
  );

  var editIcon = (
    <Button
      onClick={handleClickk}
      className="ellipsisbtn"
      style={{ color: "black", fontWeight: 800, fontSize: "medium" }}
    >
      <EllipsisOutlined />
    </Button>
  );
  function createData(name, action) {
    return { name, action };
  }

  const rows = [
    createData("Equipment", deleteIcon),
    createData("shot setting", editIcon),
  ];

  const useStyles = makeStyles({
    tableRow: {
      height: 40,
    },
    tableCell: {
      padding: "0px 30px",
    },
    table: {
      "& .MuiTableCell-root": {
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
      },
    },
  });

  const classes = useStyles();
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
  };
  //----------------------Equipment MOdal------------------------------------------

  const [openn, setOpenn] = React.useState(false);

  const handleClickOpenn = () => {
    setOpenn(true);
  };
  const handleClosee = () => {
    setOpenn(false);
  };
  //  -------------------------shot todo-----------------------------------------------------
  const [opennn, setOpennn] = React.useState(false);

  const handleClickOpennn = () => {
    setOpennn(true);
  };
  const handleCloseee = () => {
    setOpennn(false);
  };
  return (
    <div className="sweeptable">
      <Box sx={{ ...commonStyles, border: 1, borderColor: "#d8d1d1" }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 200 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              className={classes.table}
            >
              <TableHead>
                <TableRow className={classes.tableRow}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      className={classes.tableCell}
                      style={{
                        minWidth: column.minWidth,
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
                {rows.map((row) => {
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
                            key={column.id}
                            align={column.align}
                            className={classes.tableCell}
                            style={{
                              fontSize: 10,
                              fontFamily: "poppins",
                            }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
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
          style={{
            fontSize: 10,
            fontFamily: "Poppins",
            paddingLeft: 40,
            paddingRight: 40,
          }}
          onClick={handleClickOpenn}
        >
          Edit
        </MenuItem>
      </Menu>
      <Menu
        id="basic-menuuu"
        anchorEl={anchorEll}
        open={openPop}
        onClose={handleCloseeee}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          style={{
            fontSize: 10,
            fontFamily: "Poppins",
            paddingLeft: 40,
            paddingRight: 40,
          }}
          onClick={handleClickOpennn}
        >
          Edit
        </MenuItem>
      </Menu>
      {/* -------------------Equipment Modal------------------------------------------------ */}
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
          <span className="editmodalheading">Sweep Block Equipment</span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Todo />
        </DialogContent>
        <DialogActions>
          <button autoFocus onClick={handleClosee} className="savebtn">
            Save
          </button>
          <button autoFocus onClick={handleClosee} className="cancelbtn">
            Cancel
          </button>
        </DialogActions>
      </BootstrapDialog>
      {/* ---------------------------------shot todo--------------------------------------------------- */}
      <BootstrapDialogg
        onCloseee={handleCloseee}
        aria-labelledby="customized-dialog-title"
        open={opennn}
      >
        <BootstrapDialogTitlee
          id="customized-dialog-titlee"
          onCloseee={handleCloseee}
        >
          <span className="editmodalheading">Delete Sweep Block </span>
        </BootstrapDialogTitlee>
        <DialogContent dividers>
          <Todoo />
        </DialogContent>
        <DialogActions>
          <button autoFocus onClick={handleCloseee} className="savebtn">
            Save
          </button>
          <button autoFocus onClick={handleCloseee} className="cancelbtn">
            Cancel
          </button>
        </DialogActions>
      </BootstrapDialogg>
    </div>
  );
}
