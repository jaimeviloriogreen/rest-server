import express from "express";
import cors from "cors";
import apiRoutes from "../routes/users.js";

export default class{
    #port;
    #app;
    #apiPath;
    
    constructor(){
        this.#port = process.env.PORT || 4500;
        this.#apiPath = "/api/users";
        this.#app = express();
        
        // Middlewares
        this.#middleware();
        // Routes
        this.#routes();
    }

    #middleware(){
        this.#app.use(cors());
        this.#app.use(express.json("application/json"))
        this.#app.use(express.static("src/public"));
    }
    #routes(){
        this.#app.use(this.#apiPath, apiRoutes);
    }
    listen(){
        this.#app.listen(this.#port, ()=> console.log(`Running on port ${ this.#port }`));
    }
}