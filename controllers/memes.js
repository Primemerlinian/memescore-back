const { Meme } = require ('../models')
const cloudinary = require('cloudinary').v2


async function create(req, res) {
  try {
    req.body.authorId = req.user.profile.id
    const meme = await Meme.create(req.body)
    res.status(200).json(meme)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create
}

