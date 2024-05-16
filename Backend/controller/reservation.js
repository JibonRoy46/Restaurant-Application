import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservarionschema.js";

export const sendReservetion = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill full reservetion form!", 400));
    }

    try {
        await Reservation.create(firstName, lastName, email, phone, date, time);
        res.status(200).json({
            success: true,
            message: "Reservetion Sent Successeully ",
        });
    } catch (error) {
        if (error.name === "validationError") {
            const validationErrors = object.values(error.error).map(
                err => err.message);
            return next(new ErrorHandler(validationErrors.join(","), 400));
        }
        return next(error);
    }
};