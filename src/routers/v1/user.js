import express from "express";

import { signup } from "./controllers/userControllers.js";
import { validate } from "../../validators/zodValidators.js";
import { zodSignupSchema } from "../../validators/zodSignupSchema.js";

const router = express.Router();

router.post('/signup', validate(zodSignupSchema), signup);
