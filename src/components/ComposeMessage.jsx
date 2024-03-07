import SlTextarea from "@shoelace-style/shoelace/dist/react/textarea/index.js";
import SlAvatar from "@shoelace-style/shoelace/dist/react/avatar/index.js";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";
import SlCard from "@shoelace-style/shoelace/dist/react/card/index.js";
import { useState } from "react";
import PropTypes from "prop-types";
function ComposeMessage(props) {
  const [message, setMessage] = useState(
    props.composeType === "Reply"
      ? `@${props.repliedTo}`
      : props.composeType === "Edit"
      ? `@${props.repliedTo} ${props.editedMessage}`
      : ""
  );

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    const inputText = event.target.value;
    setMessage(inputText);
  };

  const buttonText =
    props.composeType === "New"
      ? "Send"
      : props.composeType === "Reply"
      ? "Reply"
      : "Update";

  const sendMessage = () => {
    props.submitMessage(message, props.composeType);
  };
  return (
    <>
      <SlCard
        className={
          props.replyToChildren
            ? ` ${
                props.composeType === "Edit"
                  ? "w-full"
                  : "w-10/12 border-l-2 border-r-0 border-gray-200 pl-10 pb-4"
              }`
            : "w-10/12 rounded-xl shadow-lg mb-4"
        }
        style={
          props.composeType === "Edit"
            ? { "--border-width": "0px", "--padding": "20px 0px" }
            : {}
        }
      >
        <div className="flex flex-row gap-5">
          {props.composeType !== "Edit" && (
            <SlAvatar
              style={{ "--size": "2rem" }}
              image={props.userImage}
              label="User avatar"
            ></SlAvatar>
          )}

          <SlTextarea
            value={message}
            className={props.composeType === "Edit" ? "w-full" : "w-[90%]"}
            onSlInput={handleChange}
            placeholder="Add a comment..."
          ></SlTextarea>
          <SlButton
            variant="primary"
            disabled={message === ""}
            onClick={sendMessage}
          >
            {buttonText}
          </SlButton>
        </div>
      </SlCard>
    </>
  );
}

ComposeMessage.propTypes = {
  userImage: PropTypes.string.isRequired,
  repliedTo: PropTypes.string,
  editedMessage: PropTypes.string,
  composeType: PropTypes.string.isRequired,
  replyToChildren: PropTypes.bool.isRequired,
  submitMessage: PropTypes.func.isRequired
};

export default ComposeMessage;
