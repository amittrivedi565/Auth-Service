import { Router } from "express";
import { PrismaService } from "../service/database";
import { AuthRepository } from "../repository/auth.repository";
import { AuthInteractor } from "../interactor/auth.interactor";
import { AuthController } from "../controller/auth.controller";
import login from "../validation/login.validation";
import register from "../validation/register.validation";


const router = Router();

const prisma = new PrismaService()
const repository = new AuthRepository(prisma)
const interactor = new AuthInteractor(repository)
const controller = new AuthController(interactor)

router.get("/login",login.loginValidation,controller.loginController.bind(controller))
router.get("/verify-token",controller.verifyTokenController.bind(controller))
router.post("/register",register.registerValidation,controller.registerController.bind(controller))

export default router