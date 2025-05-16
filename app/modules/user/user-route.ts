import { Router } from "express";
import { getResidents } from "./user-controller";

const residentRouter = Router();

residentRouter.get("/", getResidents);

export default residentRouter;