const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const formRouter = require('./formRouter');

router.use('/user', userRouter);
router.use('/form', formRouter);

module.exports = router;