import type { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

import { getDashboardService } from "./dash-service";
import { sendResponse } from "../../util/sendResponse";
import { validateErrorCatch } from "../../util/validateError";

export const getDashboard = async (req: Request, res: Response) => {
  try {

    const dashboard = await getDashboardService();
    sendResponse(res, "success", StatusCodes.OK, "data dashboard", dashboard);
  } catch (error) {
    validateErrorCatch(res, error);
  }
};
