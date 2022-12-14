import * as React from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClosee: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [openn, setOpenn] = React.useState(false);

  const handleClickOpenn = () => {
    setOpenn(true);
  };
  const handleClosee = () => {
    setOpenn(false);
  };

  return (
    <div>
      <button
        variant="outlined"
        onClick={handleClickOpenn}
        className="addsweepbtn"
      >
        Edit
      </button>
      <BootstrapDialog
        onClosee={handleClosee}
        aria-labelledby="customized-dialog-title"
        open={openn}
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
          onClosee={handleClosee}
        >
          <span className="editmodalheading">Sweep Block Details</span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form>
            <span className="spanedit">Type</span>
            <br />
            <select className="spanedit">
              <option> Commute</option>
              <option>Meeting</option>
              <option>Conntent Capture</option>
            </select>
            <br />
            <span className="spanedit">Title</span>
            <br />
            <input></input>
            <br />
            <span className="spanedit">Duration</span>
            <br />
            <input></input> <span className="spanedit">minutes</span>
          </form>
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
          <select className="camera">
            <option></option>
            <option>F/1.2 camera</option>
            <option>F/1.1 camera</option>
            <option>F/1.0 camera</option>
            <option> camera</option>
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
    </div>
  );
}
