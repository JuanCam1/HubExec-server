// import type { User } from "../../../prisma/generated/prisma/client";
// import { StateEnum, StateValue } from "../../const/state-const";
// import { InactiveUserError } from "../../error/inactive-user-error";
// import { NotFoundError } from "../../error/not-found-error";
// import { UnauthorizedError } from "../../error/un-authorized-error";
// import { currentDate, currentDateAndHour } from "../../lib/current-date-hour";
// import { prisma } from "../../lib/prisma";
// import { generateRefreshToken, generateToken } from "../../lib/token";
// import { comparePassword, hashPassword } from "../../util/hash-password";

// export const loginDao = async (
// 	login: LoginModelI,
// ): Promise<ResponseLoginModelI> => {
// 	const { fecha, hora } = currentDateAndHour(currentDate());
// 	const user = await prisma.user.findUnique({
// 		include: {
// 			state: true,
// 		},
// 		where: {
// 			email: login.email,
// 		},
// 	});

// 	if (!user) throw new NotFoundError("user not found");

// 	if (user.state.state === StateValue.INACTIVE)
// 		throw new InactiveUserError("user inactivo");

// 	const isPasswordValid = await comparePassword(login.password, user.password);

// 	if (!isPasswordValid) throw new UnauthorizedError("credentials invalid");

// 	const userPayload = {
// 		id: user.id,
// 		name: user.name,
// 		email: user.email,
// 	};

// 	const token = generateToken(userPayload);
// 	const refreshToken = generateRefreshToken(userPayload);

// 	await prisma.session.createMany({
// 		data: [
// 			{
// 				token,
// 				userId: user.id,
// 				type: "token",
// 				date_created: fecha,
// 				time_created: hora,
// 			},
// 			{
// 				token: refreshToken,
// 				userId: user.id,
// 				type: "refresh",
// 				date_created: fecha,
// 				time_created: hora,
// 			},
// 		],
// 	});

// 	return {
// 		id: user.id,
// 		name: user.name,
// 		email: user.email,
// 		token,
// 		refreshToken,
// 	};
// };

// export const registerDao = async (register: RegisterModelI): Promise<User> => {
// 	const user = await prisma.user.findUnique({
// 		include: {
// 			state: true,
// 		},
// 		where: {
// 			email: register.email,
// 		},
// 	});

// 	if (user) throw new Error("user already exists");

// 	const passwordHash = await hashPassword(register.password);

// 	const userCreate = await prisma.user.create({
// 		data: {
// 			name: register.name,
// 			email: register.email,
// 			password: passwordHash,
// 			phone: register.phone,
// 			stateId: StateEnum.INACTIVE,
// 		},
// 	});

// 	return userCreate;
// };

// export const forgotPassword = async (email: string): Promise<void> => {
// 	const user = await prisma.user.findUnique({
// 		where: {
// 			email,
// 		},
// 	});

// 	if (!user) throw new NotFoundError("user not found");

// 	const resetToken = crypto.randomUUID();
// 	const resetExpires = new Date(Date.now() + 60 * 60 * 1000);

// 	await prisma.user.update({
// 		where: { id: user.id },
// 		data: {
// 			resetPasswordToken: resetToken,
// 			resetPasswordExpires: resetExpires,
// 		},
// 	});

// 	// await sendPasswordResetEmail(email, resetToken);
// };

// export const resetPassword = async (
// 	email: string,
// 	password: string,
// ): Promise<void> => {
// 	const user = await prisma.user.findUnique({
// 		where: {
// 			email,
// 		},
// 	});

// 	if (!user) throw new NotFoundError("user not found");

// 	const passwordHash = await hashPassword(password);

// 	await prisma.user.update({
// 		where: { id: user.id },
// 		data: {
// 			password: passwordHash,
// 			resetPasswordToken: null,
// 			resetPasswordExpires: null,
// 		},
// 	});
// };
