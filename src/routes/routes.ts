import { Router } from "express";
import { PrismaService } from "../service/database";
import { AuthRepository } from "../repository/auth.repository";
import { AuthInteractor } from "../interactor/auth.interactor";
import { AuthController } from "../controller/auth.controller";
const router = Router();


const prisma = new PrismaService()
const repository = new AuthRepository(prisma)
const interactor = new AuthInteractor(repository)
const controller = new AuthController(interactor)

router.get("/login",controller.loginController.bind(controller))
router.post("/register",controller.registerController.bind(controller))

export default router