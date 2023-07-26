const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

router.get('/auth', userController.checkAuth);
router.post('/login', userController.login);
router.post('/registration', authMiddleware, userController.registration);

module.exports = router;