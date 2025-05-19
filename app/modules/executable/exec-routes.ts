import { Router, type Request, type Response } from "express";
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
import { pathConst } from "../../const/path-const";
import { multerConfig } from "../../lib/multer-config";

const execRouter = Router();
const upload = multerConfig(pathConst.destinationExec);

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
	"/history",
	upload.single("execExecutable"),
	createHistoryExecutableSchema,
	validationErrors,
	// createHistoryExecutable,
	(req: Request, res: Response) => {
		console.log("🟡 Archivo recibido en post:", req.file);
		res.send("Hello World");
	},
);
// execRouter.put("/", updateBuilder);

export default execRouter;
