require("dotenv").config()

const server = require("./server/server")


const Server = new server()

Server.listen()