import Joi from 'joi';
import { NextFunction, Request , Response } from 'express';

// Define the Joi schema
export default {
    
    loginValidation : (req: Request , res : Response , next : NextFunction) =>{

      const schema = Joi.object({
    
            email: Joi.string()
              .email({ tlds: { allow: false } })  // Ensure it's a valid email
              .required(),  // Email is required
            password: Joi.string()
              .required()  // Password is required
          });

          const {error} = schema.validate(req.body);

          if(error){
            res.status(400).json(error.message)
          }

          next()
    }
}





