import builderRouter from "../src/builder/builder-routes";
import companyRouter from "../src/company/company-routes";
import dashboardRouter from "../src/dashboard/dash-routes";
import residentRouter from "../src/residents/resident-routes";
import settingRouter from "../src/settings/setting-routes";

import { Router } from "express";

const router = Router();

router.use("/builder", builderRouter);
router.use("/setting", settingRouter);
router.use("/dash", dashboardRouter);
router.use("/company", companyRouter);


router.use("/resident", residentRouter);

export default router;