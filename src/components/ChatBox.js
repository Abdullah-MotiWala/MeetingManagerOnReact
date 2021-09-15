import React from 'react';
import { useState } from 'react';

export default function ChatBox() {
    const [message, setMessage] = useState([]);

    const addingMessage = () => {
        const msgUsers = document.getElementById("chatArea").value;
        setMessage([...message, msgUsers]);
    }
    return (
        <>
            <div className="body">
                {message.map((msg) => {
                    return <p className="userMessage">{msg}</p>
                })}
            </div>
            <input type="text" name="" id="chatArea" placeholder="Type Your Answers" />
            <button className="submit" onClick={addingMessage}>Submit</button>
        </>
    )
}
