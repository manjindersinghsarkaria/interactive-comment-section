import SlCard from "@shoelace-style/shoelace/dist/react/card/index.js";
import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";
import SlAvatar from "@shoelace-style/shoelace/dist/react/avatar/index.js";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon/index.js";
import ComposeMessage from "./ComposeMessage";
import PropTypes from "prop-types";
import { useState } from "react";

function MessageCard(props) {
  const [showReplyTextarea, setShowReplyTextarea] = useState(false);
  const [showEditTextArea, setShowEditTextArea] = useState(false);
  const deleteComment = () => {
    props.deleteMessage();
  };

  const onReplyToComment = () => {
    console.log(props);
    setShowReplyTextarea(true);
  };
  const onEditComment = () => {
    setShowEditTextArea(true);
  };

  const onSubmitComposeMessage = (message, type) => {
    if (type === "Reply") {
      setShowReplyTextarea(false);
    } else if (type === "Edit") {
      setShowEditTextArea(false);
    }
  };
  return (
    <>
      <SlCard
        className={
          props.isChildren
            ? `w-10/12 border-l-2 border-r-0 border-gray-200 pl-10${
                props.isLast ? "" : " pb-4"
              }`
            : "w-10/12 rounded-xl shadow-lg mb-4"
        }
      >
        <div className="grid grid-cols-12">
          <div className="col-span-1 flex justify-between items-center flex-col rounded-lg bg-gray-100 w-8 max-h-[90px]">
            <SlIconButton name="plus-lg" label="Settings"></SlIconButton>
            <div className="font-medium text-blue-600">
              {props.message.score}
            </div>
            <SlIconButton name="dash-lg" label="Settings"></SlIconButton>
          </div>
          <div className="col-span-11 ">
            <div className="w-full flex justify-between">
              <div className="flex flex-row gap-2 items-center">
                <SlAvatar
                  style={{ "--size": "2rem" }}
                  image={props.message.user.image.png}
                  label="User avatar"
                ></SlAvatar>
                <div className="font-medium text-gray-700 ">
                  {props.message.user.username}
                </div>
                {props.isCurrentUser && (
                  <div className="font-medium text-white bg-blue-600 rounded px-2">
                    You
                  </div>
                )}
                <div className="font-medium text-gray-400">
                  {props.message.createdAt}
                </div>
              </div>

              <div className="ml-auto ">
                {props.isCurrentUser && (
                  <>
                    <SlButton
                      variant="text"
                      type="default"
                      onClick={deleteComment}
                    >
                      <div className="text-error-normal flex items-center gap-1">
                        <SlIcon name="trash"></SlIcon>
                        Delete
                      </div>
                    </SlButton>
                    <SlButton
                      variant="text"
                      type="default"
                      disabled={showEditTextArea}
                      onClick={onEditComment}
                    >
                      <div>
                        <SlIcon name="pencil"></SlIcon> Edit
                      </div>
                    </SlButton>
                  </>
                )}
                {!props.isCurrentUser && (
                  <SlButton
                    variant="text"
                    type="default"
                    disabled={showReplyTextarea}
                    onClick={onReplyToComment}
                  >
                    <div>
                      <SlIcon name="reply"></SlIcon> Reply
                    </div>
                  </SlButton>
                )}
              </div>
            </div>
            {!showEditTextArea && (
              <div className="text-left">
                {props.isChildren && (
                  <span className="font-medium text-blue-600 mr-1">
                    @{props.message.replyingTo}
                  </span>
                )}
                {props.message.content}
              </div>
            )}
            {showEditTextArea && (
              <>
                <ComposeMessage
                  repliedTo={props.message.replyingTo}
                  userImage={props.currentUser.image.png}
                  replyToChildren={props.isChildren ?? false}
                  composeType="Edit"
                  editedMessage={props.message.content}
                  submitMessage={onSubmitComposeMessage}
                ></ComposeMessage>
              </>
            )}
          </div>
        </div>
      </SlCard>
      {showReplyTextarea && (
        <>
          <ComposeMessage
            repliedTo={props.message.user.username}
            userImage={props.currentUser.image.png}
            replyToChildren={props.isChildren ?? false}
            composeType="Reply"
            submitMessage={onSubmitComposeMessage}
          ></ComposeMessage>
        </>
      )}
      {props.children}
    </>
  );
}

MessageCard.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    replyingTo: PropTypes.string
  }).isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired,
  children: PropTypes.node,
  isChildren: PropTypes.bool,
  isLast: PropTypes.bool,
  isCurrentUser: PropTypes.bool,
  deleteMessage: PropTypes.func
};

export default MessageCard;
