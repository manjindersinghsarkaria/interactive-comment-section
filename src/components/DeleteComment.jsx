import SlDialog from "@shoelace-style/shoelace/dist/react/dialog/index.js";

import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
function DeleteComment(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, [props.openDialog]);
  const closeDialog = () => {
    setOpen(false);
    props.closeDialog();
  };
  return (
    <>
      <SlDialog
        label="Delete Comment"
        class="dialog-overview"
        open={open}
        onSlAfterHide={() => closeDialog()}
        style={{ "--width": "400px" }}
      >
        <p className="text-left">
          Are you sure you want to delete this comment? This will remove the
          comment and can&apos;t be undone.
        </p>
        <SlButton slot="footer" variant="secondary" onClick={closeDialog}>
          NO,CANCEL
        </SlButton>
        <SlButton slot="footer" variant="danger">
          YES,DELETE
        </SlButton>
      </SlDialog>
    </>
  );
}
DeleteComment.propTypes = {
  openDialog: PropTypes.bool,
  closeDialog: PropTypes.func
};
export default DeleteComment;
