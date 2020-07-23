
const socketio = require("socket.io");

const users = {};

// Replace these with Mongo models
const rooms = [];
const messages = {};

// Load all rooms from Mongo
// Load all messages by room from Mongo

module.exports = (server) => {

    const io = socketio(server);

    io.on("connect", (socket) => {

        const username = socket.handshake.query.username;

        // Add to users hash
        users[socket.id] = username;

        socket.on("disconnect", () => {

            // Delete from users hash
            delete users[socket.id];

        })

        socket.on("join", ({ room }, done) => {

            // Add room in Mongo
            // Add client in room in Mongo

            rooms = [
                ...rooms.filter(o => o !== room),
                room
            ];

            // Join socket to room
            socket.join(room, done);

        });

        socket.on("leave", ({ room }, done) => {

            // Remove socket from room
            socket.leave(room, done);

        });

        socket.on("message", ({ room, text }) => {

            if (!messages[room]) {
                messages[room] = [];
            }

            const message = {
                username: socket.handshake.query.username,
                // username: users[socket.id],
                text,
                room,
                date: Date.now(),
            };

            messages[room].push(message);

            io.in(room).emit("message", message);

        });

        socket.on("getRooms", ({}, done) => {

            // Get rooms for client from Mongo

            done(rooms);

        });

        socket.on("getMessages", ({ room }, done) => {
            
            // Get messages for room from Mongo

            done(messages[room]);

        });

        socket.on("getClients", ({ room }, done) => {
            
            // Get all clients in the room
            io.in(room).clients((err, clients) => {
                
                if (err) {

                    console.error("Could not get list of clients", room, err);

                    return done(false);

                }

                // Map socket ids to users using the hash
                done(clients.map(socketId => users[socketId]));

            });

        });

    });

};