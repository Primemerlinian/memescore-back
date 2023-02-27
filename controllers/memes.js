const { Meme } = require ('../models')

async function create(req, res) {
  try {
    const meme = await Meme.create({ profileId: req.user.id, ...req.body });
    res.status(200).json(meme);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
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
    const [updatedRowsCount, [updatedMeme]] = await Meme.update(
      req.body,
      { where: { id: req.params.id, profileId: req.body.profileId }, returning: true }
    )
    if (updatedRowsCount !== 1) {
      return res.status(403).json({ message: "You are not authorized to edit this meme" })
    }
    res.status(200).json(updatedMeme)
  } catch (error) {
    res.status(500).json(error)
  }
}


const deleteMeme = async (req, res) => {
  try {
    const meme = await Meme.findByPk(req.params.id)
    if (meme.profileId === req.user.profile.id){
    await meme.destroy()
    }
    res.status(200).json(meme)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteMeme,
}