import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div style={{ height: "90vh", width: "85vw" }}>
            <PrettyChatWindow
                projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                username={props.user.username} // adam
                secret={props.user.secret} // pass1234
                style={{ height: "100%" }}
            />

        </div >
    );
};

export default ChatsPage;