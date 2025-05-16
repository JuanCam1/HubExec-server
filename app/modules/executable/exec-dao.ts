import { StateEnum } from "../../const/state-const";
import { capitalizeText } from "../../lib/capitalize";
import { prisma } from "../../lib/prisma";

export const getExecutablesDao = async (data: PaginationAllI) => {
	const { page, pageSize, filter } = data;
	const skip = (page - 1) * pageSize;
	const take = pageSize;

	const whereClause = filter
		? {
				OR: [
					{ name: { contains: filter } },
					{ type_app: { contains: filter } },
					{ version: { contains: filter } },
				],
			}
		: {};

	const executables = await prisma.executable.findMany({
		where: whereClause,
		skip,
		take,
		select: {
			id: true,
			name: true,
			description: true,
			type_app: true,
			state: {
				select: {
					id: true,
					state: true,
				},
			},
		},
	});

	const totalExecutables = await prisma.executable.count({
		where: whereClause,
	});

	const totalPages = Math.ceil(totalExecutables / pageSize);

	const response = {
		data: executables,
		currentPage: page,
		pageSize: pageSize,
		totalPages: totalPages,
		totalRecords: totalExecutables,
	};

	return response;
};

export const createExecutableDao = async (data: ExecutableModelI) => {
	const { name, description, type_app, stateId } = data;

	const nameCapitalize = capitalizeText(name);
	const descriptionCapitalize = capitalizeText(description);

	const executable = await prisma.executable.create({
		data: {
			name: nameCapitalize,
			description: descriptionCapitalize,
			type_app,
			stateId,
		},
	});

	return executable;
};

export const createHistoryExecutable = async (
	data: HistoryExecutableModelI,
) => {
	const {
		executableId,
		version,
		pathExecutable,
		userId,
		category_app,
		platformId,
	} = data;

	const historyExecutable = await prisma.historyExecutable.create({
		data: {
			executableId,
			version,
			pathExecutable,
			userId,
			category_app,
			platformId,
		},
	});

	return historyExecutable;
};

export const executableByIdDao = async (id: string) => {
	const executable = await prisma.historyExecutable.findMany({
		select: {
			id: true,
			version: true,
			user: {
				select: {
					id: true,
					name: true,
				},
			},
			executable: {
				select: {
					id: true,
					name: true,
				},
			},
		},
		where: {
			executableId: id,
		},
	});

	return executable;
};

export const changeExecutableStateDao = async (id: string, stateId: number) => {
	const executable = await prisma.executable.update({
		where: { id },
		data: {
			stateId:
				stateId === StateEnum.ACTIVE ? StateEnum.INACTIVE : StateEnum.ACTIVE,
		},
	});

	return executable;
};

export const deleteExecutableDao = async (id: string) => {
	await prisma.historyExecutable.deleteMany({
		where: {
			executableId: id,
		},
	});

	const deleteExecutable = await prisma.executable.delete({
		where: {
			id,
		},
	});

	return deleteExecutable;
};
