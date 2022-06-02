const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors')

const io = require('socket.io')(server, {
    cors:{
        origin: '*',
        method: ['GET','POST']
    }
})

app.use(cors())

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('server is listening')
})

server.listen(PORT, () => {console.log(`listening on port ${PORT}`)})