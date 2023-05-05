import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  name: String,
  chairsCount: Number,
})

const Room = mongoose.model('rooms', roomSchema);
export default Room;
