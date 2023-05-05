import express from "express";
import addRoom from "./controllers/addRoom.js";
import getAllRooms from "./controllers/getAllRooms.js";
import bookRoom from "./controllers/bookRoom.js";
import adminDashboard from "./controllers/adminDashboard.js";

const router = express.Router()

// router.get('/', adminDashboard);
router.get('/admin', getAllRooms);
router.post('/admin/add', addRoom);
router.post('/book', bookRoom);

export default router;