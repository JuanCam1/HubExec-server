import { dataDefault } from "./data/default-data";
import Server from "./server";

const start = async (): Promise<void> => {
	try {
		await dataDefault();
		const server = new Server();
		await server.listen();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();
