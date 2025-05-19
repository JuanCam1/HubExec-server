import { check } from "express-validator";

export const getAllSchema = [
	check("page").optional(),
	check("pageSize").optional(),
	check("filter").optional(),
];
