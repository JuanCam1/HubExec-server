import { check } from "express-validator";

export const createExecutableSchema = [
	check("name").exists(),
	check("description").exists(),
	check("type_app").exists(),
	check("stateId").exists(),
];

export const changeExecutableSchema = [
	check("id").exists(),
	check("stateId").exists(),
];

export const createHistoryExecutableSchema = [
	check("version").exists(),
	check("executableId").exists(),
	check("platformId").exists(),
	check("userId").exists(),
];
// agregar estado en history
