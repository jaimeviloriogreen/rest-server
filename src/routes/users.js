import { Router } from "express";
import { getApi, putApi, postApi, deleteApi, patchApi } from "../controllers/users.js";

const api = Router();

api.get("/", getApi);
api.put("/:id?", putApi);
api.post("/", postApi);
api.delete("/", deleteApi);
api.patch("/", patchApi);


export default api;