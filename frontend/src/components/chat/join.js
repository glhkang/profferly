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
        <div className="chats-main">
                <div className="joined-chats-container">
                    <div className="rooms-list">
                        <span className="rooms-list-header">
                            <h1 className="heading-rooms">Your Rooms</h1>
                        </span>
                        <ul className="rooms-list-rooms">
                            {rooms.map((room, i) => (
                                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                <li key={i}>
                                    {room}
                                </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="joinOuterContainer">
                    <div className="joinInnerContainer">
                        <h1 className="heading">Create a New Room</h1>
                        <div>
                            <input placeholder="Enter Room Name" className="joinInput mt-20" type="text" 
                                onChange={(event) => {
                                    setRoom(event.target.value);
                                }}
                                />
                        </div>
                        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button className='button mt-20' type="submit">JOIN</button>
                        </Link>
                    </div>
                </div>
        </div> 
    )
}
export default Join;