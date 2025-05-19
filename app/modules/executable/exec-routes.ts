import { Router } from "express";
import { validationErrors } from "../../middleware/validation-middleware";
import {
	changeExecutableState,
	createExecutable,
	createHistoryExecutable,
	deleteExecutable,
	executableById,
	getExecutables,
} from "./exec-controller";
import { getAllSchema } from "../../middleware/get-all-middleware";
import {
	changeExecutableSchema,
	createExecutableSchema,
	createHistoryExecutableSchema,
} from "./exec-middleware";
import { idSchema } from "../../middleware/id-middleware";

const execRouter = Router();

execRouter.post("/", getAllSchema, validationErrors, getExecutables);

execRouter.post(
	"/create-exec",
	createExecutableSchema,
	validationErrors,
	createExecutable,
);

execRouter.get("/:id", idSchema, validationErrors, executableById);

execRouter.post(
	"/change",
	changeExecutableSchema,
	validationErrors,
	changeExecutableState,
);

execRouter.delete("/:id", idSchema, validationErrors, deleteExecutable);

execRouter.post(
	"/",
	createHistoryExecutableSchema,
	validationErrors,
	createHistoryExecutable,
);
// execRouter.put("/", updateBuilder);

export default execRouter;
