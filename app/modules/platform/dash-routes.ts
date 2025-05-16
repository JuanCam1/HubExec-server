import { Router } from "express";
import { getDashboard } from "./dash-controller";

const dashboardRouter = Router();

dashboardRouter.get("/", getDashboard);

export default dashboardRouter;