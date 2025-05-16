import type { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

import {
  changeSettingsService,
  changeThemeService,
  getSettingsService
} from "./setting-service";
import { sendResponse } from "../../util/sendResponse";
import { matchedData } from "express-validator";
import { validateErrorCatch } from "../../util/validateError";

export const changeTheme = async (req: Request, res: Response) => {
  try {
    const { id, theme } = matchedData<{ id: number, theme: ThemeI }>(req);

    const settings = await changeThemeService(id, theme);
    sendResponse(res, "success", StatusCodes.OK, "settings theme actualizado ", settings);
  } catch (error) {
    validateErrorCatch(res, error);
  }
};

export const changeSettings = async (req: Request, res: Response) => {
  try {
    const payload = matchedData<Omit<SettingOptionsI, "theme">>(req);
    const settings = await changeSettingsService(payload);
    sendResponse(res, "success", StatusCodes.OK, "Configuración actualizada", settings);
  } catch (error) {
    validateErrorCatch(res, error);
  }
}

export const getSettings = async (_req: Request, res: Response) => {
  try {
    const settings = await getSettingsService();
    sendResponse(res, "success", StatusCodes.OK, "Configuración del sistema", settings);
  } catch (error) {
    validateErrorCatch(res, error);
  }
}

