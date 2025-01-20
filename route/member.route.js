import express from "express";

import { createMember, getAllMembers } from "../controller/member.controller.js";

const router = express.Router();
router.post("/create",createMember);
router.get("/getMembers",getAllMembers);

export default router;
