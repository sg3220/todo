import { GMessage } from "../models/email.js";

export const newTask = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    await GMessage.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "message send Successfully",
    });
  } catch (error) {
    next(error);
  }
};
