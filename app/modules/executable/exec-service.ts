import {
	changeExecutableStateDao,
	createExecutableDao,
	deleteExecutableDao,
	getExecutablesDao,
	createHistoryExecutableDao,
	executableByIdDao,
} from "./exec-dao";

export const getExecutablesService = async (data: PaginationAllI) => {
	return await getExecutablesDao(data);
};

export const createExecutableService = async (
	data: Omit<ExecutableModelI, "id">,
) => {
	return await createExecutableDao(data);
};

// export const updateExecutableService = async (data: ExecutableModelI) => {
// 	return await createExecutableDao(data);
// };

export const deleteExecutableService = async (id: string) => {
	return await deleteExecutableDao(id);
};

export const executableByIdService = async (id: string) => {
	return await executableByIdDao(id);
};

export const changeExecutableStateService = async (
	id: string,
	stateId: number,
) => {
	return await changeExecutableStateDao(id, stateId);
};

export const createHistoryExecutableService = async (
	data: HistoryExecutableMulterModelI,
) => {
	return await createHistoryExecutableDao(data);
};
