import express from "express";
import { sendReservetion } from "../controller/reservation.js"

const router = express.Router();

router.post("/send", sendReservetion);

export default router;