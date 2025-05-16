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
	pathExecutable: string;
	userId: number;
	category_app: string;
	platformId: number;
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
