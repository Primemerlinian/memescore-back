const { Meme } = require ('../models')
const cloudinary = require('cloudinary').v2


async function create(req, res) {
  try {
    const meme = await Meme.create(req.body)
    res.status(200).json(meme)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

const index = async (req, res) => {
  try {
    const memes = await Meme.findAll()
    res.status(200).json(memes)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const meme = await Meme.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(meme)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteMeme = async (req, res) => {
  try {
    // We can also call destroy on an instance:
    const meme = await Meme.findByPk(req.params.id)
    await meme.destroy()
    res.status(200).json(meme)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteMeme
}

