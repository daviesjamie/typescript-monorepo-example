import express from "express";

import MessageResponse from "./interfaces/MessageResponse";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋",
  });
});

export default router;
