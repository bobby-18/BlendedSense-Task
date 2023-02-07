import * as React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputTitle from "./InputTitle";
import TableDatePicker from "./Date";
import { timezones } from "../redux/actions/BsActions";
import { useEffect } from "react";

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
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
      {children}
      {onClosee ? (
        <IconButton
          aria-label="close"
          onClick={onClosee}
          sx={{
            position: "absolute",
            right: -180,
            top: 2,
            color: (theme) => theme.palette.grey[100],
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
  onClose: PropTypes.func.isRequired,
};

export default function AddSweep() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(timezones({ token }));
  }, [dispatch]);
  const handleClickOpenn = () => {
    setOpen(true);
  };
  const handleClosee = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        variant="outlined"
        onClick={handleClickOpenn}
        className="AddSweepBtn"
      >
        + Add Sweep
      </button>
      <BootstrapDialog
        onClosee={handleClosee}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "380px",
              minHeight: "400px",
            },
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClosee}
        >
          <span className="editmodalheading">Sweep Details</span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <InputTitle />
          <TableDatePicker />
        </DialogContent>
        <DialogActions>
          <button autoFocus onClick={handleClosee} className="cancelbtn">
            Cancel
          </button>
          <button autoFocus onClick={handleClosee} className="savebtn">
            Save
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
