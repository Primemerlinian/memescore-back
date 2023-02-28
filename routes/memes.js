const router = require('express').Router()
const memesCtrl = require('../controllers/memes.js')
const middleware = require('../middleware/auth.js')
const app = require('../server.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, memesCtrl.create)
router.get('/', checkAuth, memesCtrl.index)
router.get('/:id', checkAuth, memesCtrl.show)
router.put('/:id', checkAuth, memesCtrl.update)
router.delete('/:id', checkAuth, memesCtrl.delete)


module.exports = router