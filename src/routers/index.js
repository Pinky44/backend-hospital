const Router = require('express').Router;
const userRouter = require('./users');
const visitRouter = require('./visits');

const router = new Router();

router.use('/users', userRouter);
router.use('/visits', visitRouter);

module.exports = router;
