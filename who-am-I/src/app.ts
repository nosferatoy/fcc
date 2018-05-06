import express from "express";

import Api from "./controllers/api";

const app = express();

var api : any = new Api();


//add env variables if needed in env file
app.set("port", process.env.PORT || 3000);

//expose api funtionality to paths
app.get("/api/whoami", api.getCallHederData);

export default app;