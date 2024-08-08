import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
  try {
    return res.status(200).json({
      message: "Hello jagjit",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
