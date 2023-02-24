const router = require('express').Router()
const memesCtrl = require('../controllers/memes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, memesCtrl.create)
router.get('/', checkAuth, memesCtrl.index)


module.exports = router