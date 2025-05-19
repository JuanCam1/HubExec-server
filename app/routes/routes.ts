import { Router } from "express";
import execRouter from "../modules/executable/exec-routes";

const router = Router();

router.use("/exec", execRouter);

export default router;
