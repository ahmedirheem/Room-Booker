import express from "express";
import addRoom from "./controllers/addRoom.js";
import getAllRooms from "./controllers/getAllRooms.js";
import bookRoom from "./controllers/bookRoom.js";
import adminDashboard from "./controllers/adminDashboard.js";
import bookedRooms from "./controllers/bookedRooms.js";

const router = express.Router()

// router.get('/', adminDashboard);
router.get('/admin', getAllRooms);
router.post('/admin/add', addRoom);
router.post('/book', bookRoom);
router.get('/booked', bookedRooms);

export default router;