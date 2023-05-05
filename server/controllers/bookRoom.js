import Room from '../database/model/Room.js'

const bookRoom = async (req, res) => {
  try {
    const { name, bookedDay } = req.body
    const newRoom = await Room.create({ name, bookedDay })
    console.log();
    res.status(201).json({
      error: false,
      data: {
        room: newRoom
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: 'Internal Server Error!'
    })
  }
}

export default bookRoom;