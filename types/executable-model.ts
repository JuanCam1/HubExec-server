export interface ExecutableModel {
	id: string;
	name: string;
	description: string;
	version: string;
	type_app: string;
	stateId: number;
}

export interface ExecutableResponseModel {
	id: string;
	name: string;
	description: string;
	version: string;
	type_app: string;
	stateId: number;
	state: StateModelI;
}

export interface HistoryExecutableModel {
	executableId: string;
	version: string;
	userId: number;
	platformId: number;
}

export interface HistoryExecutableMulterModel extends HistoryExecutableModelI {
	execForm: Express.Multer.File | undefined;
}

export interface HistoryExecutableResponseModel {
	id: string;
	version: string;
	pathExecutable: string;
	user: User;
	category_app: string;
	platform: PlatformModelI;
}

interface User {
	id: number;
	name: string;
	email: string;
}
