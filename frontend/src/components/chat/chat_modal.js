import React from 'react';
import Link from 'react-router-dom';
import Join from "./join";
import Chat from "./chat";


const ChatModal = () => {
debugger
    return (
        <div className="chat-modal-container">
                    <Join />
                    {/* <ProtectedRoute path="/join" exact component={Join} /> */}
        </div>
    )
}

export default ChatModal;