const express = require('express');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const stockRoutes = require('./routes/stock');

app.use('/api/stocks', stockRoutes);


io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

module.exports = { io };

