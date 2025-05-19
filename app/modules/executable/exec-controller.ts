import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { sendResponse } from "../../util/sendResponse";
import { matchedData } from "express-validator";
import { validateErrorCatch } from "../../util/validateError";
import {
	changeExecutableStateService,
	createExecutableService,
	createHistoryExecutableService,
	deleteExecutableService,
	executableByIdService,
	getExecutablesService,
} from "./exec-service";

export const getExecutables = async (req: Request, res: Response) => {
	try {
		const data = matchedData<PaginationAllI>(req);
		const executables = await getExecutablesService(data);
		sendResponse(res, "success", StatusCodes.OK, "getExecutables", executables);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};

export const createExecutable = async (req: Request, res: Response) => {
	try {
		const data = matchedData<ExecutableModelI>(req);
		const exec = await createExecutableService(data);
		sendResponse(res, "success", StatusCodes.OK, "createExecutable", exec);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};

export const deleteExecutable = async (req: Request, res: Response) => {
	try {
		const { id } = matchedData<{ id: string }>(req);
		const exec = await deleteExecutableService(id);
		sendResponse(res, "success", StatusCodes.OK, "deleteExecutable", exec);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};

export const executableById = async (req: Request, res: Response) => {
	try {
		const { id } = matchedData<{ id: string }>(req);
		const exec = await executableByIdService(id);
		sendResponse(res, "success", StatusCodes.OK, "executableById", exec);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};

export const changeExecutableState = async (req: Request, res: Response) => {
	try {
		const { id, stateId } = matchedData<{ id: string; stateId: number }>(req);
		const exec = await changeExecutableStateService(id, stateId);
		sendResponse(res, "success", StatusCodes.OK, "changeExecutableState", exec);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};

export const createHistoryExecutable = async (req: Request, res: Response) => {
	try {
		const data = matchedData<HistoryExecutableModelI>(req);
		const execForm = req?.file;

		const dataHistory = {
			...data,
			execForm,
		};

		const exec = await createHistoryExecutableService(dataHistory);
		sendResponse(
			res,
			"success",
			StatusCodes.OK,
			"createHistoryExecutable",
			exec,
		);
	} catch (error) {
		validateErrorCatch(res, error);
	}
};
