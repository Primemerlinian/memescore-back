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

async function update(req, res) {
  try {
    const meme = await Meme.findByPk(req.params.id)
    if (meme.profileId === req.user.profile.id){
      meme.set(req.body)
      await meme.save()
    }
    res.status(200).json(meme)
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