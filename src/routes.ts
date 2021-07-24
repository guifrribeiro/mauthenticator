import { Router } from "express";
import { AuthenticateUserController } from "./controllers/users/AuthenticateUserController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();

routes.post("/auth", authenticateUserController.handle);

export { routes };