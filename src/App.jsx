import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";
import SlCard from "@shoelace-style/shoelace/dist/react/card/index.js";
import api from "./services";
import MessageCard from "./components/MessageCard";
import SlSpinner from "@shoelace-style/shoelace/dist/react/spinner/index.js";
import ComposeMessage from "./components/ComposeMessage";
import DeleteComment from "./components/DeleteComment";
import { useState } from "react";
// Define a component to fetch data
function DataFetchingComponent() {
  const [openDelete, setOpenDelete] = useState(false);
  const query = useQuery({
    queryKey: ["comments"],
    queryFn: api.data.getComments
  });

  if (query.isLoading)
    return <SlSpinner style={{ fontSize: "3rem" }}></SlSpinner>;
  if (query.isError) return <p>Error: {query.error.message}</p>;
  const onSubmitComposeMessage = (message) => {
    console.log("submitting compose message");
    console.log(message);
  };

  const showDeleteComment = () => {
    setOpenDelete(true);
  };
  const closeDelete = () => {
    setOpenDelete(false);
  };

  // Assuming query.data contains the fetched data
  return (
    <>
      {query.data.comments.map((message, index) => (
        <MessageCard
          key={index}
          message={message}
          currentUser={query.data.currentUser}
        >
          {message.replies && message.replies.length > 0 && (
            <div className="sm:ml-10 xs:ml-1">
              {message.replies.map((reply, index) => (
                <MessageCard
                  key={index}
                  message={reply}
                  isChildren={true}
                  currentUser={query.data.currentUser}
                  isCurrentUser={
                    query.data.currentUser.username == reply.user.username
                  }
                  isLast={index == message.replies.length - 1}
                  deleteMessage={showDeleteComment}
                ></MessageCard>
              ))}
            </div>
          )}
        </MessageCard>
      ))}
      <div className="mt-4">
        <ComposeMessage
          userImage={query.data.currentUser.image.png}
          composeType="New"
          replyToChildren={false}
          submitMessage={onSubmitComposeMessage}
        ></ComposeMessage>
      </div>
      {openDelete && (
        <DeleteComment
          openDialog={openDelete}
          closeDialog={closeDelete}
        ></DeleteComment>
      )}
    </>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SlCard style={{ "--padding": "0px" }}>
        <div className="bg-violet-50   p-4">
          <DataFetchingComponent />
        </div>
      </SlCard>
    </QueryClientProvider>
  );
}

export default App;
