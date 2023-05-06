import express from "express";
import addRoom from "./controllers/addRoom.js";
import getAllRooms from "./controllers/getAllRooms.js";
import bookRoom from "./controllers/bookRoom.js";
import getRooms from './controllers/getRooms.js';

const router = express.Router()

router.get('/room/get/:day', getRooms);
router.get('/admin', getAllRooms);
router.post('/admin/add', addRoom);
router.patch('/room/book/:roomId', bookRoom);

export default router;