const { addpost, getPost, updatePost } = require("../controllers/Post-controller");

const router = require("express").Router();

router.post('/api/post',addpost);
router.get('/api/post/',getPost);
router.put('/api/post/:id',updatePost);
router.get('/api/')

module.exports=router;