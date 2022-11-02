const router = require('express').Router();
const {login,Signup,verifyToken,getUser,logout, updateUser, allUsers} = require('../controllers/User-controller')

router.post('/auth/login',login);
router.post('/auth/register',Signup);
router.get('/auth/user',verifyToken,getUser);

router.post('/auth/logout',verifyToken,logout);
router.get('/auth/users',allUsers);

module.exports = router;