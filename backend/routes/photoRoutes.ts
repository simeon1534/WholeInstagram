import {Router} from "express";
import {uploadPhoto} from "../controllers/PhotoController";


export const photoRouter = Router();
photoRouter.post("/new_photo", uploadPhoto)
