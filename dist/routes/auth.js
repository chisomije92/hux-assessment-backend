import express from "express";
import { login, register } from "../controllers/auth.js";
import { body } from "express-validator";
const router = express.Router();
router.post("/register", [
    body("name").trim().isLength({ min: 4 }),
    body("email").isEmail().normalizeEmail().isLength({ max: 50 }),
    body("password").isLength({ min: 5 }),
], register);
router.post("/login", [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
], login);
export default router;
//# sourceMappingURL=auth.js.map