import express, {
	type Application,
	type NextFunction,
	type Request,
	type Response,
} from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import Config from "./util/config";
import router from "./routes/routes";

export class Server {
	server: Application;

	constructor() {
		this.server = express();
		this.settings();
		this.middlewares();
		this.routes();
	}

	private settings() {
		this.server.set("port", Config.getInstance().get("port"));
	}

	private middlewares() {
		this.server.use(express.json());
		this.server.use(cors());
		this.server.use(helmet());
		this.server.use(bodyParser.urlencoded({ extended: true }));
		this.server.use((req: Request, res: Response, next: NextFunction) => {
			console.log("🏈 Solicitud recibida:", req.method, req.url);
			console.log("🏈 body", req.body);
			console.log("🏈 params", req.params);
			// console.log("🏈 query", req.query);
			next();
		});
	}

	private routes() {
		// this.server.use("/files", routerFiles);
		this.server.use("/images", express.static("public"));
		this.server.use("/api", router);
		this.server.get("/", (req, res) => {
			res.send("Hello API");
		});
	}

	async listen(): Promise<void> {
		this.server.listen(this.server.get("port"));
		console.log("Servidor inicializado - Puerto:", this.server.get("port"));
	}
}

export default Server;
