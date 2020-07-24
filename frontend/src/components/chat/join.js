import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"; 
import './Join.css';

const Join = () => {
    const user = useSelector((state) => state.session.user);
    const [name, setName] = useState(user.username);
    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState(user.rooms);
  
    useEffect(() => {
       setRooms(rooms)
    })

    return (
        <div>
                <div className="join-chat-container">
                    <div className="joined-chats-container">
                        <ul>{rooms.map((room, i) => (
                            <li key={i}><Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                {room}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>


                <div className="joinOuterContainer">
                    <div className="joinInnerContainer">
                        <h1 className="heading">Join</h1>
                        <div>
                            <input placeholder="Room" className="joinInput mt-20" type="text" 
                                onChange={(event) => {
                                    setRoom(event.target.value);
                                }}
                                />
                        </div>
                        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button className={'button mt-20'} type="submit">JOIN</button>
                        </Link>
                    </div>
                </div>
        </div> 
    )
}
export default Join;