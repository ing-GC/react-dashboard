import express from "express";

import {
    index,
    show,
    store,
    update,
    destroy
} from "../controllers/ClientController.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.patch("/:id", update);
router.delete("/:id", destroy);

export default router;