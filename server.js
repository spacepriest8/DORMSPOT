import http from "http";
import app from "./app/app.js";

const PORT = process.env.PORT || 1961;

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));