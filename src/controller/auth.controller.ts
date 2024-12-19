import { Admin } from '../interface/admin.interface';
import { IController } from '../interface/controller.interface';
import { IInteractor } from '../interface/interactor.interface';
import { Request, Response } from 'express';

export class AuthController implements IController {
  private interactor: IInteractor;

  constructor(interactor: IInteractor) {
    this.interactor = interactor;
  }

  async registerController(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const input = { email, password };

      const registerAdmin = await this.interactor.registerInteractor(input);

      res.status(200).json(registerAdmin);
    } catch (error: any) {
      console.log(`Error occurred in Controller Layer : ${error}`);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async loginController(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const input = { email, password };

      const loginAdmin = await this.interactor.loginInteractor(input);

      res.status(200).json(loginAdmin);
    } catch (error: any) {
      console.log(`Error occurred in Controller Layer : ${error}`);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async verifyTokenController(req: Request, res: Response): Promise<void> {
      try {
        const {token} = req.body

        if(!token){
          res.status(400).json("Token not provided!");
        }

        const decoded = await this.interactor.verifyTokenInteractor(token)

        res.status(200).json(decoded);

      } catch (error) {
        console.log(`Error occurred in Controller Layer : ${error}`);
        res.status(500).json({ message: 'Internal Server Error' });
      }
  }
}
