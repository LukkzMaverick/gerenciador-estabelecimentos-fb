import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


export default function AlertDialog(props) {

  const handleClose = (props) => {
    
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Tem certeza?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O Estabelecimento {props.nomeEstabelecimento} será excluído para sempre!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.confirmDelete()} color="primary" autoFocus>
            Sim
          </Button>
          <Button onClick={() => props.giveUpDelete()} color="secondary">
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
