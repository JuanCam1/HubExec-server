export interface LoginModel {
	email: string;
	password: string;
}

export interface RegisterModel {
	name: string;
	email: string;
	password: string;
	phone: string;
}

export interface PayloadModel {
	id: number;
	name: string;
	email: string;
}

export interface ResponseLoginModel {
	id: number;
	name: string;
	email: string;
	token: string;
	refreshToken: string;
}
