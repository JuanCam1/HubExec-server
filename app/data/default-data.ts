import { prisma } from "../lib/prisma";

const dataState = async () => {
	const count = await prisma.state.count();

	if (count === 0) {
		await prisma.state.createMany({
			data: [
				{
					id: 1,
					state: "Activo",
				},
				{
					id: 2,
					state: "Inactivo",
				},
			],
		});
	}
};

const dataCategory = async () => {
	const count = await prisma.category.count();

	if (count === 0) {
		await prisma.category.createMany({
			data: [
				{
					id: 1,
					name: "Mobile",
				},
				{
					id: 2,
					name: "Desktop",
				},
				{
					id: 3,
					name: "Windows",
				},
			],
		});
	}
};

const dataPlatform = async () => {
	const count = await prisma.platform.count();
	const countCategory = await prisma.category.count();

	if (countCategory > 0 && count === 0) {
		await prisma.platform.createMany({
			data: [
				{
					id: 1,
					name: "Windows",
					categoryId: 1,
				},
				{
					id: 2,
					name: "MacOS",
					categoryId: 1,
				},
				{
					id: 3,
					name: "Linux",
					categoryId: 1,
				},
				{
					id: 4,
					name: "Android",
					categoryId: 2,
				},
				{
					id: 5,
					name: "IOS",
					categoryId: 2,
				},
			],
		});
	}
};

export const dataDefault = async () => {
	await dataState();
	await dataCategory();
	await dataPlatform();
};
